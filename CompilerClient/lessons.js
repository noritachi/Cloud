const lessons = [
    {
        title: "Lesson 1: Hello World",
        codeCsharp: `using System;

namespace HelloWorld
{
  class Program
  {
    static void toDo()
    {
      //Write Your Code Here
      Console.Write("Hello World!");
    }
  
    static void Main(string[] args)
    {
      toDo();
    }
  }
}`, 
        codeJava: `class HelloWorld {
    public static void toDo() {
      //Write Your Code Here
      System.out.print("Hello World!");
    }
  
    public static void main(String[] args) {
      toDo();
    }
}`,
        requirement: `Print out "Hello World" to screen`,
        result: "Hello World!"
    },
    {
        title: "Lesson 2: Conditions",
        codeCsharp: `using System;

namespace HelloWorld
{
  class Program
  {
    static void toDo(int grade)
    {
      //Write Your Code Here
    }
  
    static void Main(string[] args)
    {
      int[] arr = { 4, 5, 3, 8, 9 };
      for(int i=0; i<5; i++)
      {
          toDo(arr[i]);
          Console.Write(" ");
      }
    }
  }
}`, 
        codeJava: `class HelloWorld {
    public static void toDo(int grade) {
      //Write Your Code Here
    }
  
    public static void main(String[] args) {
      int[] arr = { 4, 5, 3, 8, 9 };
        
      for(int i=0; i<5; i++)
      {
          toDo(arr[i]);
          System.out.print(" ");;
      }
    }
}`,
        requirement: 
        `GPA >= 5: Pass, GPA < 5: Fail. Print out "Pass" or "Fail" for each grade`,
        result: "Fail Pass Fail Pass Pass "
    },
    {
        title: "Lesson 3: Loop",
        codeCsharp: `using System;

namespace HelloWorld
{
  class Program
  {
    static void toDo()
    {
      //Write Your Code Here
    }
  
    static void Main(string[] args)
    {
      toDo();
    }
  }
}`, 
        codeJava: `class HelloWorld {
    public static int toDo() {
      int sum = 0;
      for(int i=1; i<11; i++)
      {
        //Write Your Code Here
      }
      return sum;
    }
  
    public static void main(String[] args) {
      System.out.print(toDo());
    }
}`,
        requirement: `Write a program to find the sum of first 10 natural numbers`,
        result: "55"
    },
    {
        title: "Lesson 4: Min - Max",
        codeCsharp: `using System;

namespace HelloWorld
{
  class Program
  {
    static void toDo(int[] arr)
    {
      //Write Your Code Here
    }
  
    static void Main(string[] args)
    {
      int[] arr = { 8, 3, 1, 5, 9 };
      toDo(arr);
    }
  }
}`, 
        codeJava: `class HelloWorld {
    public static void toDo(int[] array) {
      //Write Your Code Here
    }
  
    public static void main(String[] args) {
      int[] arr = { 8, 3, 1, 5, 9 };
      toDo(arr);
    }
}`,
        requirement: `Write a program to print out:
        "min max" of this array [8, 3, 1, 5, 9]`,
        result: "1 9"
    },
    {
      title: "Lesson 5: Recursion",
      codeCsharp: `using System;
namespace HelloWorld
{
  class Program
  {
    static void toDo()
    {
      //Write Your Code Here
    }

    static void Main(string[] args)
    {
      toDo();
    }
  }
}`, 
      codeJava: `class HelloWorld {
  public static int toDo() {
    int sum = 0;
    //Write Your Code Here
    return sum;
  }

  public static void main(String[] args) {
    System.out.print(toDo());
  }
}`,
      requirement: `Write a program to find the sum of first 10 natural numbers by recursion`,
      result: "55"
    },
    {
      title: "Lesson 6: Find Prime Number",
      codeCsharp: `using System;

namespace HelloWorld
{
  class Program
  {
    static void toDo(int[] arr)
    {
      //Write Your Code Here
    }
  
    static void Main(string[] args)
    {
      int[] arr = { 0, 1, 4, 5, 7, 9, 12, 17 };
      toDo(arr);
    }
  }
}`, 
      codeJava: `class HelloWorld {
  public static void toDo(int[] array) {
    //Write Your Code Here
  }

  public static void main(String[] args) {
    int[] arr = { 0, 1, 4, 5, 7, 9, 12, 17 };
    toDo(arr);
  }
}`,
      requirement: `Write a program to print out:
      all prime numbers of this array [0, 1, 4, 5, 7, 9, 12, 17]`,
      result: "5 7 17"
    },
    {
      title: "Lesson 7: Sum Of Even Numbers",
      codeCsharp: `using System;

namespace HelloWorld
{
  class Program
  {
    static void toDo(int[] arr)
    {
      //Write Your Code Here
    }
  
    static void Main(string[] args)
    {
      int[] arr = { 0, 1, 4, 5, 7, 9, 12, 17 };
      toDo(arr);
    }
  }
}`, 
      codeJava: `class HelloWorld {
  public static void toDo(int[] array) {
    //Write Your Code Here
  }

  public static void main(String[] args) {
    int[] arr = { 0, 1, 4, 5, 7, 9, 12, 17 };
    toDo(arr);
  }
}`,
      requirement: `Write a program to print out:
      sum of even numbers of this array [0, 1, 4, 5, 7, 9, 12, 17]`,
      result: "16"
    }
]