import java.util.Scanner;

public class VoterGuesser{

   public static void main(String[] args){
   
      Scanner scanner = new Scanner(System.in);
      System.out.print("Enter your guess: ");
      String guess = scanner.nextLine();
      //possible while loop before the if statement
      if(guess.equals("democrat") || guess.equals("Democrat")){
         System.out.println("you are correct!");
      }
      else if(guess.equals("republican") || guess.equals("Republican")){
      //edit this text
         System.out.println("you are incorrect, this voter voted for xxx");
      }
      else{
         System.out.println("please enter either Democrat or Republican");
      }
      
      
      
      scanner.close();
   }
}