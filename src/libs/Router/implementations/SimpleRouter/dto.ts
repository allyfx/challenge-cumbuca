export interface IRouterContext {
  navigate: (path: string) => void;
  goBack: () => void;
}