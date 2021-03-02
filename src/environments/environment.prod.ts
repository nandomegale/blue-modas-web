const mainURL: string = "https://blue-modas-api.herokuapp.com/"

export const environment = {
  production: true,
  product: {
    productEndPoint: `${mainURL}products`
  },
  order: {
    orderEndPoint: `${mainURL}orders`
  }
};
