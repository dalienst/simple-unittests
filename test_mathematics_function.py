import unittest

from mathematics import add, subtract, divide, multiply, modulus

class TestMathematics(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)

    def test_multiply(self):
        self.assertEqual(multiply(2, 3), 6)
        self.assertEqual(multiply(-1, 1), -1)
        self.assertEqual(multiply(0, 10), 0)

    def test_subtract(self):
        self.assertEqual(subtract(5, 3), 2)
        self.assertEqual(subtract(-1, 1), -2)
        self.assertEqual(subtract(0, 0), 0)

    def test_divide(self):
        self.assertEqual(divide(6, 3), 2)
        self.assertEqual(divide(-1, 1), -1)
        self.assertEqual(divide(5, 2), 2.5)
        with self.assertRaises(ZeroDivisionError):
            divide(1, 0)

    def test_modulus(self):
        self.assertEqual(modulus(5, 3), 2)
        self.assertEqual(modulus(10, 2), 0)
        self.assertEqual(modulus(9, 7), 2)
        with self.assertRaises(ZeroDivisionError):
            modulus(1, 0)


if __name__ == '__main__':
    unittest.main()
