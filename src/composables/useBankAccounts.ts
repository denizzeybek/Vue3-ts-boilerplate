import { computed } from 'vue';
import { useBankAccountsStore } from '@/stores/bankAccounts';

export const useBankAccounts = () => {
  const bankAccountsStore = useBankAccountsStore();

  const getFieldByTitle = (element: any, title: string) => {
    const field = element?.fields?.find((field: any) => field?.bankAccountField?.title === title);
    return field?.value || '';
  };

  const bankAccountList = computed(() => {
    const filteredBankAccounts = bankAccountsStore.list.filter(
      (bankAccount: any) => bankAccount?.fields?.length > 0,
    );
    const filteredPayoneerAccounts = bankAccountsStore.list.filter(
      (bankAccount: any) => bankAccount?.type === 'payoneer',
    );
    let ibanField: '';
    let bankNameField: '';
    let accountHolderNameField: '';
    if (filteredBankAccounts?.length) {
      return filteredBankAccounts?.map((element) => {
        ibanField = getFieldByTitle(element, 'IBAN');
        bankNameField = getFieldByTitle(element, 'Bank Name');
        accountHolderNameField = getFieldByTitle(element, 'Account Holder Name');
        // const swiftNameField = getFieldByTitle(element, 'SWIFT / BIC');
        // const idNumberField = getFieldByTitle(element, 'ID Number');
        return {
          label: `#${element.id} - ${accountHolderNameField || ''} - ${element.currencyCode} - ${
            bankNameField || ''
          }(${ibanField || ''})`,
          value: element.id,
        };
      });
    }
    return filteredPayoneerAccounts.map((element) => {
      return {
        label: `# ${element.type?.toUpperCase()} (${element.currencyCode || 'NA'})`,
        value: element.id,
      };
    });
  });

  return {
    bankAccountList,
    getFieldByTitle
  };
};
