class HelloWorld {
    public static void toDo(int grade) {
      //Write Your Code Here
      if(grade >= 5) 
      {
        System.out.print("Pass");
      }
      else 
      {
        System.out.print("Fail");
      }
    }
  
    public static void main(String[] args) {
      int[] arr = { 4, 5, 3, 8, 9 };
        
      for(int i=0; i<5; i++)
      {
          toDo(arr[i]);
          System.out.print(" ");;
      }
    }
}