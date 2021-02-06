public class Main {
    public static void main(String[] args) {
        reverseWord("This is a test.");
        primeNumbers();
        System.out.println(getUp(true, 0));
        System.out.println(getUp(true, -1));
        System.out.println(getUp(false, 0));
        System.out.println(getUp(true, 0));
        System.out.println(getUp(true, 23));
    }

    public static void reverseWord(String str) {
        char[] stringArray = str.toCharArray();
        String reverseWord = "";
        for (int i = str.length() - 1; i >= 0; i --) {
            reverseWord = reverseWord + stringArray[i];
        }
        System.out.println(reverseWord);
    }

    public static void primeNumbers() {
        int prime = 1;
        while (prime <= 20) {
            int test = 2;
            while (prime >= test) {
                if (prime % test == 0 && prime != test) {
                    break;
                } else if (prime == test) {
                    System.out.println(prime);
                    break;
                } else
                    test++;
            }
            prime++;
        }
    }

    public static boolean getUp(boolean squawking, int currentHour) {
        if (currentHour >= 0 && currentHour <= 23) {
            if (squawking) {
                return currentHour < 6 || currentHour > 22;
            } else
                return false;
        } else
            return false;
    }
}
