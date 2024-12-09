using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Введите n: ");
        if (!int.TryParse(Console.ReadLine(), out int n) || n <= 0)
        {
            Console.WriteLine("Введите корректное положительное число.");
            return;
        }

        // ConcurrentDictionary для хранения результата в потокобезопасной коллекции
        var results = new ConcurrentDictionary<int, List<int>>();

        // Многопоточная обработка чисел
        Parallel.For(1, n + 1, i =>
        {
            results[i] = Factorize(i);
        });

        // Вывод результата
        foreach (var kvp in results.OrderBy(x => x.Key))
        {
            Console.WriteLine($"{kvp.Key}: {string.Join(" * ", kvp.Value)}");
        }
    }

    // Метод для разложения числа на простые множители
    static List<int> Factorize(int number)
    {
        var factors = new List<int>();
        int divisor = 2;

        while (number > 1)
        {
            while (number % divisor == 0)
            {
                factors.Add(divisor);
                number /= divisor;
            }
            divisor++;
        }

        return factors;
    }
}