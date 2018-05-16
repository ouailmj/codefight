boolean like0hn0(int[][] grid) {
    boolean result = true;
    int visibility;
    int length = grid.length;
    boolean debug = false;

    for (int i=0; i<length; i++)
        for (int j=0; j<length; j++) {
            if (grid[i][j] !=0) {
                visibility = 0;
                if (debug) System.out.println("Checking visibility of grid[" + i
                                         + "][" + j + "]");
                int i1=i;
                int j1=j;
                while (++i1<length && grid[i1][j1] != 0) visibility++;
                if (debug) System.out.println("Visibility down is: " + visibility);

                i1=i;
                while (--i1>=0 && grid[i1][j1] !=0) visibility++;
                if (debug) System.out.println("Visibility up is: " + visibility);

                i1=i;
                while (++j1<length && grid[i1][j1] !=0) visibility++;
                if (debug) System.out.println("Visibility right is: " + visibility);

                j1=j;
                while (--j1>=0 && grid[i1][j1] !=0) visibility++;
                if (debug) System.out.println("Visibility left is: " + visibility);
                if (grid[i][j] != visibility) return false;
            }
        }


    return result;
}
