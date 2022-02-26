export const getProductByTitleURL = ( data:any, titleURL:any ) => {
    
  return data.find( (data: { titleURL: any; }) => data.titleURL === titleURL );
}