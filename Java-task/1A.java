import java.util.Random;

class A {

    public static void shuffleArray(int[] array) {
        Random rand = new Random();
        int n = array.length;

        for (int i = n - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);

            // Swap array
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    public static void main(String[] args) {
        int[] Array_ex = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(Array_ex);

        // Print the shuffled array
        for (int num : Array_ex) {
            System.out.print(num + " ");
        }
    }    
}

