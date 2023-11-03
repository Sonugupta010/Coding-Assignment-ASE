import java.util.Scanner;

class PangramChecker {
    
    public static boolean isPangram(String sentence) {
        // Create an array to track the presence of each letter from 'a' to 'z'
        boolean[] isPresent = new boolean[26];

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                isPresent[ch - 'a'] = true;
            }
        }

        // Check if all letters from 'a' to 'z' are present
        for (boolean letterPresent : isPresent) {
            if (!letterPresent) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase(); // Convert to lowercase for case insensitivity
        scanner.close();

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}

