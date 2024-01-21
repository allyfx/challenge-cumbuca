/**
 * !Nota da autora:
 * Tentativa de fazer um Drag and Drop utilizando apenas bibliotecas nativas do react-native.
 * Infelizmente, pelo tempo disponível para o desafio, não foi possível finalizar esse componente.
 * Acredito que, com algum tempo a mais, seria possível finalizar.
 * A fim de finalizar o desafio com todos os requisitos, optei por utilizar uma biblioteca
 * apenas para essa funcionalidade.
 * */

import React, { useState, useRef, useCallback } from 'react';
import { PanResponder, Animated, Text, StyleSheet, PanResponderInstance } from 'react-native';

type ListItem = {
  id: number;
  data: string;
  posY: Animated.Value;
};

const ITEM_HEIGHT = 60;

export const DragAndDropList = () => {
  const [dragging, setDragging] = useState(false)

  const [flatlistTopOffset, setFlatListTopOffset] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [rowHeight, setRowHeight] = useState(ITEM_HEIGHT)

  const initialData: ListItem[] = [
    { id: 1, data: 'Item 1', posY: new Animated.Value(0) },
    { id: 2, data: 'Item 2', posY: new Animated.Value(1) },
    { id: 3, data: 'Item 3', posY: new Animated.Value(3) },
  ];

  const [data, setData] = useState<ListItem[]>(initialData);
  const scrollY = useRef(new Animated.Value(0)).current;
  const activeItem = useRef<number | null>(null);
  const activeItemInitialPosition = useRef<number>(0);

  const panResponder: PanResponderInstance = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (_, gestureState) => {
        const itemIndex = findItemIndexAt(gestureState.y0);
        if (itemIndex !== -1) {
          console.log(itemIndex)
          activeItem.current = itemIndex;
          activeItemInitialPosition.current = gestureState.y0;
          const item = data[itemIndex];
          item.posY.setValue(gestureState.y0);
          setDragging(true)
        }
      },
      onPanResponderMove: (_, gestureState) => {
        if (activeItem.current !== null) {
          const item = data[activeItem.current];
          item.posY.setValue(activeItemInitialPosition.current + gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (activeItem.current !== null) {
          const newPosition = activeItemInitialPosition.current + gestureState.dy;
          const newItemIndex = findItemIndexAt(newPosition);
          const item = data[activeItem.current];
          const reorderedData = reorderList(data, activeItem.current, newItemIndex);
          setData(reorderedData);
          activeItem.current = null;
          setDragging(false)
        }
      },
    })
  ).current;

  const findItemIndexAt = useCallback((yPosition: number): number => {
    const adjustedYPosition = scrollOffset + yPosition - flatlistTopOffset;

    const index = Math.floor(adjustedYPosition / rowHeight);

    return Math.max(0, Math.min(data.length - 1, index));
  }, [flatlistTopOffset, scrollOffset, data]);
  
  const reorderList = (list: ListItem[], fromIndex: number, toIndex: number): ListItem[] => {
    const updatedList = Array.from(list);
    const [reorderedItem] = updatedList.splice(fromIndex, 1);
    updatedList.splice(toIndex, 0, reorderedItem);
    return updatedList;
  };

  const renderItem = ({ item, index }: { item: ListItem; index: number }) => {
    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.item, { transform: [{ translateY: item.posY }] }]}
        onLayout = { (e) => setRowHeight(e.nativeEvent.layout.height) }
      >
        <Text>{item.data}</Text>
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      scrollEnabled={!dragging}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onScroll={(e) => {
        Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })
        setScrollOffset(e.nativeEvent.contentOffset.y)
      }}
      onLayout = { e => {
        setFlatListTopOffset(e.nativeEvent.layout.y)
      }}
      style={{flex: 1, marginTop: '50%'}}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
    height: 60
  },
});
