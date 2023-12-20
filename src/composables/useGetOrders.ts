export function useGetOrders() {
  return useAPIFetch("method/orders.getTest", {
    transform(data: string) {
      const dataJSON = JSON.parse(data);
      return dataJSON.response.data.orders;
    }
  });
}
