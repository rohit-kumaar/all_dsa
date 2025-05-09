#include <iostream>
using namespace std;

bool isPresent(int arr[3][4], int target)
{
    for (int row = 0; row < 3; row++)
    {
        for (int col = 0; col < 4; col++)
        {
            if (arr[row][col] == target)
            {
                return 1;
            }
        }
    }

    return 0;
}

int main()
{

    int arr[3][4] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};

    // print
    for (int row = 0; row < 3; row++)
    {
        for (int col = 0; col < 4; col++)
        {
            cout << arr[row][col] << " ";
        }
        cout << endl;
    }

    cout << "Enter the element to search : " << endl;
    int target;
    cin >> target;

    if (isPresent(arr, target))
    {
        cout << "Element Found" << endl;
    }
    else
    {
        cout << "Not Found" << endl;
    }

    return 0;
}