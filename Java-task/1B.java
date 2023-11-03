import java.util.Scanner;

class RomanToInteger {
    
    public static int romanToInt(String s) {
        int res = 0;
        int prevValue = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            int currValue = romanValue(s.charAt(i));
            if (currValue < prevValue) {
                res -= currValue;
            } else {
                res += currValue;
            }
            prevValue = currValue;
        }
        return res;
    }

    public static int romanValue(char roman) {
        switch (roman) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman number: ");
        String romanNumber = scanner.nextLine().toUpperCase(); 
        scanner.close();

        int result = romanToInt(romanNumber);
        System.out.println("The integer equivalent of " + romanNumber + " is: " + result);
    }
}



