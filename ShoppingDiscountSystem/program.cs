using System;

namespace ShoppingDiscountSystem
{
    // ==================== ENUMS ====================
    public enum CustomerType
    {
        Occasional,
        Regular
    }

    // ==================== DELEGATES ====================
    public delegate double DiscountStrategy(double price);

    // ==================== CLASSES ====================
    
    // Product Class
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public double ProductPrice { get; set; }

        public Product(int id, string name, double price)
        {
            ProductId = id;
            ProductName = name;
            ProductPrice = price;
        }

        public override string ToString()
        {
            return $"Product: {ProductName} (ID: {ProductId}) - Price: ${ProductPrice:F2}";
        }
    }

    // Customer Class
    public class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public CustomerType CustomerType { get; set; }

        public Customer(int id, string name, CustomerType type)
        {
            CustomerId = id;
            CustomerName = name;
            CustomerType = type;
        }

        public override string ToString()
        {
            return $"Customer: {CustomerName} (ID: {CustomerId}) - Type: {CustomerType}";
        }
    }

    // Shopping Cart Class
    public class ShoppingCart
    {
        public Customer Customer { get; set; }
        public List<Product> Products { get; set; }
        private DiscountStrategy _discountStrategy;

        public ShoppingCart(Customer customer)
        {
            Customer = customer;
            Products = new List<Product>();
            SetDiscountStrategy();
        }

        private void SetDiscountStrategy()
        {
            // Assign discount strategy based on customer type
            switch (Customer.CustomerType)
            {
                case CustomerType.Occasional:
                    _discountStrategy = FestivalDiscount;
                    break;
                case CustomerType.Regular:
                    _discountStrategy = PremiumDiscount;
                    break;
                default:
                    _discountStrategy = NoDiscount;
                    break;
            }
        }

        // Discount Methods
        private double FestivalDiscount(double price)
        {
            double discountRate = 0.17; // 17%
            double discountAmount = price * discountRate;
            Console.WriteLine($"  Applying Festival Discount: {discountRate:P0} (${discountAmount:F2})");
            return price - discountAmount;
        }

        private double PremiumDiscount(double price)
        {
            double discountRate = 0.28; // 28%
            double discountAmount = price * discountRate;
            Console.WriteLine($"  Applying Premium Discount: {discountRate:P0} (${discountAmount:F2})");
            return price - discountAmount;
        }

        private double NoDiscount(double price)
        {
            Console.WriteLine($"  No discount applied");
            return price;
        }

        // Add product to cart
        public void AddProduct(Product product)
        {
            Products.Add(product);
            Console.WriteLine($"Added to cart: {product.ProductName}");
        }

        // Calculate total with discount
        public void Checkout()
        {
            Console.WriteLine("\n" + new string('=', 50));
            Console.WriteLine("CHECKOUT SUMMARY");
            Console.WriteLine(new string('=', 50));
            
            Console.WriteLine($"\n{Customer}");
            Console.WriteLine("\nItems in cart:");
            
            double subtotal = 0;
            foreach (var product in Products)
            {
                Console.WriteLine($"  - {product.ProductName}: ${product.ProductPrice:F2}");
                subtotal += product.ProductPrice;
            }

            Console.WriteLine($"\nSubtotal: ${subtotal:F2}");
            
            // Apply discount using delegate
            double finalAmount = _discountStrategy(subtotal);
            
            Console.WriteLine($"\nFinal Amount after discount: ${finalAmount:F2}");
            Console.WriteLine(new string('=', 50));
        }
    }

    // Discount Manager (Optional - for demonstration)
    public static class DiscountManager
    {
        public static DiscountStrategy GetDiscountStrategy(CustomerType customerType)
        {
            return customerType switch
            {
                CustomerType.Occasional => FestivalDiscount,
                CustomerType.Regular => PremiumDiscount,
                _ => NoDiscount
            };
        }

        private static double FestivalDiscount(double price)
        {
            return price * 0.83; // 17% discount
        }

        private static double PremiumDiscount(double price)
        {
            return price * 0.72; // 28% discount
        }

        private static double NoDiscount(double price)
        {
            return price;
        }
    }

    // ==================== MAIN PROGRAM ====================
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("==========================================");
            Console.WriteLine("SMART ONLINE SHOPPING DISCOUNT SYSTEM");
            Console.WriteLine("==========================================\n");

            // Create sample products
            Product laptop = new Product(101, "Dell Laptop", 1200.00);
            Product phone = new Product(102, "iPhone 15", 999.99);
            Product headphones = new Product(103, "Sony Headphones", 199.99);
            Product keyboard = new Product(104, "Mechanical Keyboard", 89.99);

            // Create customers with different types
            Customer occasionalCustomer = new Customer(1, "John Doe", CustomerType.Occasional);
            Customer regularCustomer = new Customer(2, "Jane Smith", CustomerType.Regular);
            Customer newCustomer = new Customer(3, "Bob Johnson", CustomerType.Occasional);

            // Test Case 1: Occasional Customer (Festival Discount)
            Console.WriteLine("\n" + new string('-', 40));
            Console.WriteLine("TEST CASE 1: OCCASIONAL CUSTOMER");
            Console.WriteLine(new string('-', 40));
            
            ShoppingCart cart1 = new ShoppingCart(occasionalCustomer);
            cart1.AddProduct(laptop);
            cart1.AddProduct(headphones);
            cart1.Checkout();

            // Test Case 2: Regular Customer (Premium Discount)
            Console.WriteLine("\n" + new string('-', 40));
            Console.WriteLine("TEST CASE 2: REGULAR CUSTOMER");
            Console.WriteLine(new string('-', 40));
            
            ShoppingCart cart2 = new ShoppingCart(regularCustomer);
            cart2.AddProduct(phone);
            cart2.AddProduct(keyboard);
            cart2.AddProduct(headphones);
            cart2.Checkout();

            // Test Case 3: Multiple Scenarios
            Console.WriteLine("\n" + new string('-', 40));
            Console.WriteLine("TEST CASE 3: DISCOUNT DEMONSTRATION");
            Console.WriteLine(new string('-', 40));
            
            // Show discount calculation for different amounts
            Console.WriteLine("\nDemonstrating discount calculations:");
            
            double[] testAmounts = { 100.00, 500.00, 1000.00, 2500.00 };
            
            foreach (var amount in testAmounts)
            {
                Console.WriteLine($"\nOriginal Amount: ${amount:F2}");
                
                // Occasional customer discount
                DiscountStrategy occasionalDiscount = DiscountManager.GetDiscountStrategy(CustomerType.Occasional);
                double occasionalFinal = occasionalDiscount(amount);
                Console.WriteLine($"  After 17% Festival Discount: ${occasionalFinal:F2}");
                
                // Regular customer discount
                DiscountStrategy regularDiscount = DiscountManager.GetDiscountStrategy(CustomerType.Regular);
                double regularFinal = regularDiscount(amount);
                Console.WriteLine($"  After 28% Premium Discount: ${regularFinal:F2}");
                
                Console.WriteLine($"  Savings Difference: ${(occasionalFinal - regularFinal):F2}");
            }

            // Test Case 4: Dynamic Discount Strategy Change
            Console.WriteLine("\n" + new string('-', 40));
            Console.WriteLine("TEST CASE 4: DYNAMIC STRATEGY CHANGE");
            Console.WriteLine(new string('-', 40));
            
            Customer testCustomer = new Customer(4, "Alice Brown", CustomerType.Occasional);
            ShoppingCart dynamicCart = new ShoppingCart(testCustomer);
            
            Console.WriteLine("\nInitial purchase as Occasional Customer:");
            dynamicCart.AddProduct(keyboard);
            dynamicCart.Checkout();
            
            Console.WriteLine("\nCustomer upgrades to Regular type...");
            testCustomer.CustomerType = CustomerType.Regular;
            
            // Create new cart with updated customer type
            ShoppingCart upgradedCart = new ShoppingCart(testCustomer);
            Console.WriteLine("Making new purchase as Regular Customer:");
            upgradedCart.AddProduct(laptop);
            upgradedCart.AddProduct(phone);
            upgradedCart.Checkout();

            Console.WriteLine("\n" + new string('=', 50));
            Console.WriteLine("SYSTEM SUMMARY");
            Console.WriteLine(new string('=', 50));
            Console.WriteLine($"Total Customers Created: 4");
            Console.WriteLine($"Total Products Available: 4");
            Console.WriteLine($"Discount Strategies Implemented: 2");
            Console.WriteLine("1. Festival Discount: 17% for Occasional Customers");
            Console.WriteLine("2. Premium Discount: 28% for Regular Customers");
            Console.WriteLine(new string('=', 50));

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}