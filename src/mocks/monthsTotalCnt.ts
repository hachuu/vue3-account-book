type PaymentData = {
  date: string
  time: string
  title: string
  amount: number
  category: string
  memo: string
  currency: string,
  incomeExpense: IncomeExpenseType,
  paymentMethod?: PaymentMethodData | null,
}

type MonthData = {
  month: string,
  totalCnt: number,
  datas: PaymentData[],
}

enum IncomeExpenseType {
  income = 'income',
  expense = 'expense',
}

export const januaryData: PaymentData[] = [
  { date: '2023-01-01', time: '12:33', title: '메가커피', amount: 4000, category: 'food', memo: '커피', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-02', time: '19:09', title: '롯데리아', amount: 2900, category: 'food', memo: '햄버거', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-03', time: '12:14', title: '말하는 고구마', amount: 14000, category: 'food', memo: '커피', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-06', time: '00:36', title: '쿠팡', amount: 30000, category: 'necessity', memo: '생필품', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-18', time: '21:23', title: '쿠팡', amount: 30000, category: 'necessity', memo: '샴푸', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-19', time: '21:44', title: 'gs편의점', amount: 2800, category: 'food', memo: '편의점', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-20', time: '17:54', title: '이마트', amount: 30000, category: 'necessity', memo: '대전 이마트', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-20', time: '19:30', title: '다이소', amount: 5000, category: 'necessity', memo: '다이소', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-20', time: '19:49', title: '화장품', amount: 32800, category: 'necessity', memo: '올리브영', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-21', time: '00:20', title: '쿠팡', amount: 25900, category: 'necessity', memo: '뭐 필요해서 샀겠지..', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-21', time: '08:32', title: '스타벅스', amount: 10000, category: 'food', memo: '스벅', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-21', time: '09:33', title: '휴게소', amount: 24000, category: 'food', memo: '아점', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-21', time: '12:05', title: '설 선물', amount: 110020, category: 'food', memo: '한우', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-21', time: '12:25', title: '떡', amount: 8000, category: 'food', memo: '제사 떡', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-22', time: '16:49', title: '휴게소', amount: 10000, category: 'food', memo: '휴게소 음식', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-22', time: '16:51', title: '간식', amount: 6300, category: 'food', memo: '회사 간식', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-01-25', time: '18:15', title: '약국 (목아픔)', amount: 4000, category: 'hospital', memo: '약국', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
]

export const februaryData: PaymentData[] = [
  { date: '2023-02-03', time: '16:00', title: 'Delivery food', amount: 19000, category: 'food', memo: '떡볶이', currency: 'KRW', incomeExpense: IncomeExpenseType.expense },
  { date: '2023-02-04', time: '19:57', title: '생필품', amount: 32350, category: 'necessity', memo: '바디샤워', currency: 'KRW', incomeExpense: IncomeExpenseType.expense, paymentMethod: {supportedMethods: 'woori'} },
]

export const monthsCnt: MonthData[] = [
  { month: '202201', totalCnt: januaryData.length, datas: januaryData  },
  { month: '202202', totalCnt: februaryData.length, datas: februaryData  },
]
