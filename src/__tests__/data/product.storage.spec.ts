import data from "../../data"

describe('Product Test - Storage', () => {
  it("should create a product", async () => {
    const product = {
      name: "Test",
      price: 10,
      quantity: 10,
      userId: "test-user-id"
    }

    const response = await data.Product.create(product)

    expect(response.status).toBe(201)
    expect(response.data[0].name).toEqual(product.name)
  })

  it("should get user products", async () => {
    const response = await data.Product.getUserProducts("test-user-id")

    expect(response.status).toBe(200)
    expect(response.data.length).toBeGreaterThan(0)
  })

  it("should change product quantity", async () => {
    const response = await data.Product.changeProductQuantity({
      productId: 1,
      type: "add",
      userId: "test-user-id"
    })

    expect(response.status).toBe(200)
    expect(response.data[0].quantity).toEqual(11)

    const response2 = await data.Product.changeProductQuantity({
      productId: 1,
      type: "remove",
      userId: "test-user-id"
    })

    expect(response2.status).toBe(200)
    expect(response2.data[0].quantity).toEqual(10)
  })

  it("should remove a product", async () => {
    const response = await data.Product.remove(1)

    expect(response.status).toBe(200)
  })

  it("should not change product quantity for a product that doesn't exist", async () => {
    const response = await data.Product.changeProductQuantity({
      productId: 1,
      type: "add",
      userId: "test-user-id"
    })

    expect(response.status).toBe(404)
  })

  it("should not remove a product that doesn't exist", async () => {
    const response = await data.Product.remove(1)

    expect(response.status).toBe(404)
  })
})