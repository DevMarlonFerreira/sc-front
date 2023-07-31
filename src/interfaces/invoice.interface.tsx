// export interface IInvoice {
//   data: [
//     {
//       id: string;
//       client: string;
//       reference: string;
//       date: string;
//       energyQuantity: string;
//       energyPriceUnit: string;
//       energyValue: string;
//       injectedQuantity: string;
//       injectedPriceUnit: string;
//       injectedValue: string;
//       sICMSQuantity: string;
//       sICMSPriceUnit: string;
//       sICMSValue: string;
//       publicContributionValue: string;
//       total: string;
//       created_at: Date;
//       updated_at: Date;
//     }
//   ];
// }

export interface IInvoice {
  id: string;
  client: string;
  referencemonth: string;
  referenceyear: string;
  date: string;
  energyQuantity: string;
  energyPriceUnit: string;
  energyValue: string;
  injectedQuantity: string;
  injectedPriceUnit: string;
  injectedValue: string;
  sICMSQuantity: string;
  sICMSPriceUnit: string;
  sICMSValue: string;
  publicContributionValue: string;
  total: string;
  created_at: Date;
  updated_at: Date;
}
