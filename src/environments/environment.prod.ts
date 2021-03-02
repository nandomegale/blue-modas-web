const mainURL: string = "https://blue-modas-web.herokuapp.com"

export const environment = {
  production: true,
  product: {
    productEndPoint: `${mainURL}products`
  },
  order: {
    orderEndPoint: `${mainURL}orders`
  }
};
