using System;

delegate double BillingStrategy(double amount);

abstract class Patient
{
    public string Name { get; }
    public int Age { get; }

    protected Patient(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public abstract double CalculateTreatmentCost();
}

class GeneralPatient : Patient
{
    public GeneralPatient(string name, int age) : base(name, age) { }
    public override double CalculateTreatmentCost() => 2000;
}

class EmergencyPatient : Patient
{
    public EmergencyPatient(string name, int age) : base(name, age) { }
    public override double CalculateTreatmentCost() => 5000;
}

class InsurancePatient : Patient
{
    public InsurancePatient(string name, int age) : base(name, age) { }
    public override double CalculateTreatmentCost() => 3000;
}

class BillingService
{
    public event Action<string> BillGenerated;

    public double GenerateBill(Patient patient, BillingStrategy strategy)
    {
        double baseAmount = patient.CalculateTreatmentCost();
        double finalAmount = strategy(baseAmount);
        BillGenerated?.Invoke($"Bill generated for {patient.Name} : Rs. {finalAmount}");
        return finalAmount;
    }
}

class HospitalDepartments
{
    public void Notify(string message)
    {
        Console.WriteLine($"[Notification] {message}");
    }
}

class Program
{
    static double NormalBilling(double amount) => amount;
    static double InsuranceBilling(double amount) => amount * 0.7;
    static double EmergencyBilling(double amount) => amount * 1.2;

    static void Main()
    {
        Console.Write("Enter patient name: ");
        string name = Console.ReadLine();

        Console.Write("Enter age: ");
        int age = int.Parse(Console.ReadLine());

        Console.WriteLine("Select patient type:");
        Console.WriteLine("1. General");
        Console.WriteLine("2. Emergency");
        Console.WriteLine("3. Insurance");

        int choice = int.Parse(Console.ReadLine());

        Patient patient;
        BillingStrategy strategy;

        switch (choice)
        {
            case 1:
                patient = new GeneralPatient(name, age);
                strategy = NormalBilling;
                break;
            case 2:
                patient = new EmergencyPatient(name, age);
                strategy = EmergencyBilling;
                break;
            case 3:
                patient = new InsurancePatient(name, age);
                strategy = InsuranceBilling;
                break;
            default:
                return;
        }

        BillingService billingService = new BillingService();
        HospitalDepartments departments = new HospitalDepartments();

        billingService.BillGenerated += departments.Notify;

        billingService.GenerateBill(patient, strategy);
    }
}
