// Una transaction es duplicada, si tiene el mismo sourceAccount, targetAccount, category, amount y el tiempo es menor a 1 minuto de diferencia.
// Hacer una funcionalidad que agrupe las transaccciones duplicadas en una lista.

const transactions = [
    {
      id: 3,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:34:30.000Z",
    },
    {
      id: 1,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:00.000Z",
    },
    {
      id: 6,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:05.000Z",
    },
    {
      id: 4,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:36:00.000Z",
    },
    {
      id: 2,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:50.000Z",
    },
    {
      id: 5,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:00.000Z",
    },
  ];

  
  
  function groupDuplicateTransactions(transactions) {
    const groupedTransactions = [];
    const duplicates = {};
  
    transactions.forEach((transaction) => {
      const { sourceAccount, targetAccount, category, amount, time } = transaction;
      const key = `${sourceAccount}-${targetAccount}-${category}-${amount}`;
  
      if (duplicates[key]) {
        const timeDiff = Math.abs(new Date(time) - new Date(duplicates[key][0].time));
        if (timeDiff < 60000) {
          duplicates[key].push(transaction);
        } else {
          duplicates[key] = [transaction];
        }
      } else {
        duplicates[key] = [transaction];
      }
    });
  
    for (const key in duplicates) {
      if (duplicates[key].length > 1) {
        groupedTransactions.push(duplicates[key]);
      }
    }
  
    return groupedTransactions;
  }
  
  const duplicateTransactions = groupDuplicateTransactions(transactions);
  console.log(duplicateTransactions);
  
  