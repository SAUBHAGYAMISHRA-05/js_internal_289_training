using System;

namespace PaymentGatewaySystem
{
    // ==================== ENUMS ====================
    public enum PaymentMethod
    {
        CreditCard,
        UPI,
        NetBanking,
        Wallet
    }

    public enum PaymentStatus
    {
        Success,
        Failed,
        Pending,
        Cancelled
    }

    // ==================== DELEGATES ====================
    public delegate PaymentStatus PaymentProcessor(double amount, string transactionId, string paymentDetails);

    // ==================== CLASSES ====================

    // Transaction Class
    public class Transaction
    {
        public string TransactionId { get; set; }
        public double Amount { get; set; }
        public DateTime TransactionDate { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public PaymentStatus Status { get; set; }
        public string CustomerName { get; set; }

        public Transaction(string id, double amount, PaymentMethod method, string customerName)
        {
            TransactionId = id;
            Amount = amount;
            PaymentMethod = method;
            CustomerName = customerName;
            TransactionDate = DateTime.Now;
            Status = PaymentStatus.Pending;
        }

        public override string ToString()
        {
            return $"Transaction {TransactionId}: {CustomerName} paid ${Amount:F2} via {PaymentMethod} on {TransactionDate:yyyy-MM-dd HH:mm:ss} - Status: {Status}";
        }
    }

    // Customer Class
    public class Customer
    {
        public string CustomerId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public PaymentMethod PreferredPaymentMethod { get; set; }

        public Customer(string id, string name, string email, PaymentMethod preferredMethod)
        {
            CustomerId = id;
            Name = name;
            Email = email;
            PreferredPaymentMethod = preferredMethod;
        }
    }

    // Payment Gateway Class
    public class PaymentGateway
    {
        private PaymentProcessor _paymentProcessor;
        
        public PaymentGateway()
        {
            // Default processor
            _paymentProcessor = ProcessCreditCardPayment;
        }

        // Set payment processor based on method
        public void SetPaymentMethod(PaymentMethod method)
        {
            Console.WriteLine($"\nSetting payment method to: {method}");
            
            _paymentProcessor = method switch
            {
                PaymentMethod.CreditCard => ProcessCreditCardPayment,
                PaymentMethod.UPI => ProcessUPIPayment,
                PaymentMethod.NetBanking => ProcessNetBankingPayment,
                PaymentMethod.Wallet => ProcessWalletPayment,
                _ => ProcessCreditCardPayment
            };
        }

        // Process payment using current delegate
        public PaymentStatus ProcessPayment(Transaction transaction)
        {
            Console.WriteLine($"\nProcessing payment for transaction {transaction.TransactionId}...");
            Console.WriteLine($"Customer: {transaction.CustomerName}");
            Console.WriteLine($"Amount: ${transaction.Amount:F2}");
            Console.WriteLine($"Method: {transaction.PaymentMethod}");

            // Simulate payment details based on method
            string paymentDetails = GetPaymentDetails(transaction.PaymentMethod);
            
            // Use delegate to process payment
            transaction.Status = _paymentProcessor(transaction.Amount, transaction.TransactionId, paymentDetails);
            
            return transaction.Status;
        }

        // Payment Processing Methods
        private PaymentStatus ProcessCreditCardPayment(double amount, string transactionId, string paymentDetails)
        {
            Console.WriteLine($"  Processing Credit Card Payment...");
            Console.WriteLine($"  Card Details: {paymentDetails}");
            Console.WriteLine($"  Amount: ${amount:F2}");
            
            // Simulate processing logic
            System.Threading.Thread.Sleep(1000); // Simulate processing time
            
            // Simulate random success/failure (80% success rate for demo)
            Random random = new Random();
            bool isSuccess = random.Next(100) < 80;
            
            if (isSuccess)
            {
                Console.WriteLine($"  ✅ Credit Card Payment Successful!");
                return PaymentStatus.Success;
            }
            else
            {
                Console.WriteLine($"  ❌ Credit Card Payment Failed!");
                return PaymentStatus.Failed;
            }
        }

        private PaymentStatus ProcessUPIPayment(double amount, string transactionId, string paymentDetails)
        {
            Console.WriteLine($"  Processing UPI Payment...");
            Console.WriteLine($"  UPI ID: {paymentDetails}");
            Console.WriteLine($"  Amount: ${amount:F2}");
            
            System.Threading.Thread.Sleep(800);
            
            // UPI has higher success rate
            Random random = new Random();
            bool isSuccess = random.Next(100) < 90;
            
            if (isSuccess)
            {
                Console.WriteLine($"  ✅ UPI Payment Successful!");
                return PaymentStatus.Success;
            }
            else
            {
                Console.WriteLine($"  ❌ UPI Payment Failed!");
                return PaymentStatus.Failed;
            }
        }

        private PaymentStatus ProcessNetBankingPayment(double amount, string transactionId, string paymentDetails)
        {
            Console.WriteLine($"  Processing Net Banking Payment...");
            Console.WriteLine($"  Bank: {paymentDetails}");
            Console.WriteLine($"  Amount: ${amount:F2}");
            
            System.Threading.Thread.Sleep(1500);
            
            Random random = new Random();
            bool isSuccess = random.Next(100) < 75;
            
            if (isSuccess)
            {
                Console.WriteLine($"  ✅ Net Banking Payment Successful!");
                return PaymentStatus.Success;
            }
            else
            {
                Console.WriteLine($"  ❌ Net Banking Payment Failed!");
                return PaymentStatus.Failed;
            }
        }

        private PaymentStatus ProcessWalletPayment(double amount, string transactionId, string paymentDetails)
        {
            Console.WriteLine($"  Processing Wallet Payment...");
            Console.WriteLine($"  Wallet: {paymentDetails}");
            Console.WriteLine($"  Amount: ${amount:F2}");
            
            System.Threading.Thread.Sleep(500);
            
            Random random = new Random();
            bool isSuccess = random.Next(100) < 95;
            
            if (isSuccess)
            {
                Console.WriteLine($"  ✅ Wallet Payment Successful!");
                return PaymentStatus.Success;
            }
            else
            {
                Console.WriteLine($"  ❌ Wallet Payment Failed!");
                return PaymentStatus.Failed;
            }
        }

        private string GetPaymentDetails(PaymentMethod method)
        {
            return method switch
            {
                PaymentMethod.CreditCard => "**** **** **** 1234 (VISA)",
                PaymentMethod.UPI => "customer@upi",
                PaymentMethod.NetBanking => "State Bank of India",
                PaymentMethod.Wallet => "Paytm Wallet",
                _ => "Unknown"
            };
        }

        // Method to demonstrate multicast delegate
        public void ProcessWithAllMethods(double amount, string transactionId)
        {
            Console.WriteLine($"\nProcessing ${amount:F2} with ALL payment methods:");
            
            // Create multicast delegate
            PaymentProcessor multicastProcessor = ProcessCreditCardPayment;
            multicastProcessor += ProcessUPIPayment;
            multicastProcessor += ProcessNetBankingPayment;
            multicastProcessor += ProcessWalletPayment;
            
            // Get all methods from delegate
            var methods = multicastProcessor.GetInvocationList();
            
            foreach (PaymentProcessor processor in methods)
            {
                string methodName = processor.Method.Name.Replace("Process", "").Replace("Payment", "");
                Console.WriteLine($"\nTrying {methodName}...");
                
                PaymentStatus status = processor(amount, transactionId, GetPaymentDetails(PaymentMethod.CreditCard));
                Console.WriteLine($"  Result: {status}");
                
                if (status == PaymentStatus.Success)
                {
                    Console.WriteLine("  ✅ Found a working method!");
                    break;
                }
            }
        }
    }

    // Payment Service Class (Facade Pattern)
    public class PaymentService
    {
        private PaymentGateway _gateway;
        
        public PaymentService()
        {
            _gateway = new PaymentGateway();
        }
        
        public void MakePayment(Customer customer, double amount)
        {
            Console.WriteLine($"\n{new string('=', 50)}");
            Console.WriteLine("PAYMENT INITIATED");
            Console.WriteLine(new string('=', 50));
            
            // Generate transaction ID
            string transactionId = $"TXN{DateTime.Now:yyyyMMddHHmmssfff}";
            
            // Create transaction
            Transaction transaction = new Transaction(
                transactionId, 
                amount, 
                customer.PreferredPaymentMethod, 
                customer.Name
            );
            
            Console.WriteLine(transaction);
            
            // Set payment method
            _gateway.SetPaymentMethod(customer.PreferredPaymentMethod);
            
            // Process payment
            PaymentStatus status = _gateway.ProcessPayment(transaction);
            
            Console.WriteLine($"\nFinal Status: {status}");
            Console.WriteLine(new string('=', 50));
        }
    }

    // ==================== MAIN PROGRAM ====================
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("==========================================");
            Console.WriteLine("SMART PAYMENT GATEWAY SYSTEM");
            Console.WriteLine("==========================================\n");

            // Create payment service
            PaymentService paymentService = new PaymentService();
            
            // Create sample customers with different preferred payment methods
            Customer customer1 = new Customer("CUST001", "John Doe", "john@email.com", PaymentMethod.CreditCard);
            Customer customer2 = new Customer("CUST002", "Jane Smith", "jane@email.com", PaymentMethod.UPI);
            Customer customer3 = new Customer("CUST003", "Bob Johnson", "bob@email.com", PaymentMethod.NetBanking);
            Customer customer4 = new Customer("CUST004", "Alice Brown", "alice@email.com", PaymentMethod.Wallet);

            // Test Case 1: Individual Payments
            Console.WriteLine("\n" + new string('-', 40));
            Console.WriteLine("TEST CASE 1: INDIVIDUAL PAYMENTS");
            Console.WriteLine(new string('-', 40));
            
            paymentService.MakePayment(customer1, 149.99);
            paymentService.MakePayment(customer2, 299.50);
            paymentService.MakePayment(customer3, 75.25);
            paymentService.MakePayment(customer4, 500.00);

            // Test Case 2: Dynamic Method Switching
            Console.WriteLine("\n\n" + new string('-', 40));
            Console.WriteLine("TEST CASE 2: DYNAMIC METHOD SWITCHING");
            Console.WriteLine(new string('-', 40));
            
            Customer flexibleCustomer = new Customer("CUST005", "Flexible User", "flex@email.com", PaymentMethod.CreditCard);
            PaymentGateway flexibleGateway = new PaymentGateway();
            
            // Try different payment methods for the same transaction
            double amount = 199.99;
            string testTransactionId = "TEST123";
            
            Console.WriteLine($"\nProcessing ${amount:F2} with different methods:");
            
            Console.WriteLine("\n1. Credit Card:");
            flexibleGateway.SetPaymentMethod(PaymentMethod.CreditCard);
            flexibleGateway.ProcessPayment(new Transaction(testTransactionId + "A", amount, PaymentMethod.CreditCard, flexibleCustomer.Name));
            
            Console.WriteLine("\n2. UPI:");
            flexibleGateway.SetPaymentMethod(PaymentMethod.UPI);
            flexibleGateway.ProcessPayment(new Transaction(testTransactionId + "B", amount, PaymentMethod.UPI, flexibleCustomer.Name));
            
            Console.WriteLine("\n3. Net Banking:");
            flexibleGateway.SetPaymentMethod(PaymentMethod.NetBanking);
            flexibleGateway.ProcessPayment(new Transaction(testTransactionId + "C", amount, PaymentMethod.NetBanking, flexibleCustomer.Name));

            // Test Case 3: Multicast Delegate (Try all methods)
            Console.WriteLine("\n\n" + new string('-', 40));
            Console.WriteLine("TEST CASE 3: MULTICAST DELEGATE DEMO");
            Console.WriteLine(new string('-', 40));
            
            PaymentGateway advancedGateway = new PaymentGateway();
            advancedGateway.ProcessWithAllMethods(350.75, "MULTI123");

            // Test Case 4: Statistics and Summary
            Console.WriteLine("\n\n" + new string('-', 40));
            Console.WriteLine("TEST CASE 4: SYSTEM STATISTICS");
            Console.WriteLine(new string('-', 40));
            
            Console.WriteLine("\nPayment Method Success Rates:");
            Console.WriteLine("1. Credit Card: ~80% success rate");
            Console.WriteLine("2. UPI: ~90% success rate (Fastest)");
            Console.WriteLine("3. Net Banking: ~75% success rate");
            Console.WriteLine("4. Wallet: ~95% success rate (Most reliable)");
            
            Console.WriteLine("\nDelegate Implementation:");
            Console.WriteLine("- Single delegate for each payment method");
            Console.WriteLine("- Dynamic switching at runtime");
            Console.WriteLine("- Multicast capability for fallback strategies");
            Console.WriteLine("- Encapsulated payment logic");

            Console.WriteLine("\n" + new string('=', 50));
            Console.WriteLine("SYSTEM SUMMARY");
            Console.WriteLine(new string('=', 50));
            Console.WriteLine("Payment Methods Supported: 4");
            Console.WriteLine("Customers Processed: 5");
            Console.WriteLine("Delegate Pattern: Strategy Pattern Implementation");
            Console.WriteLine("Real-world Application: E-commerce, Banking, Retail");
            Console.WriteLine(new string('=', 50));

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}