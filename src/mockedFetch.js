/*return promise that resolves to object that has property json is a function that returns array :
[
      {
          name: 'Lager',
          price: 10
      },
      {
          name: 'APA',
          price: 15
      }
  ] */


const orders = [
    {
        name: 'Lager',
        price: 10
    },
    {
        name: 'APA',
        price: 15
    }
]

export const mockedFetch = () => {
    return Promise.resolve({
        json: () =>  orders 
    })
}