# no_of_wheels = 4
# airbags = 5
# milage = 20
# color = "red"

# def movingForword():
#     print("Acc pressed")
# def carStoppes():
#     print("Brake Pressed")

# class Car:
#     no_of_wheels = 4
#     airbags = 5
#     milage = 20
#     color = "red"
#     def movingForword():
#         print("Acc pressed")
#     def carStoppes():
#         print("Brake Pressed")

# car1 = Car() #Object or instance
# car1.milage=60
# car2=Car()
# car2.milage=15
# print(car1.milage)
# print(car2.milage)
# print(car1.airbags)


# private 
__name = "vghvjh"
# protected
_user="jjb"
# public

# encapsulation
# class BankAccount:
#     __balance = 0
#     def set_Balance(self,bal):
#         if bal>0 :
#             BankAccount.__balance+=bal
#     def deb_balance(self,less):
#         if less>0:
#             BankAccount.__balance-=less
#     def getBalance(self):
#         return BankAccount.__balance
# b = BankAccount()
# b.set_Balance(500)
# b.deb_balance(100)
# print(b.getBalance())

# abstraction
from abc import ABC,abstractmethod
class PaymentGeateway(ABC):
    @abstractmethod
    def pay(self,amount):
        pass
class Phonepe(PaymentGeateway):
    def pay(self,amount):
        print(f'Paid {amount} Via PhonePe')
class GPay(PaymentGeateway):
    def pay(self,amount):
        print(f'Paid {amount} Via GPay')

payment = GPay()
payment.pay(200)

payment = Phonepe()
payment.pay(400)


# inheritence
class Vehicle:
    def vehicle(self):
        self._totalairbags = 5
        print("The vehicle has 5 AirBags")
class Car(Vehicle):
    def car(self):
        print(self._totalairbags)
        print("Car is ON")

c = Car()
c.vehicle()
c.car()

# Polymorphism
# oveloading
class Calculator:
    def add(self,a=0,b=0,c=0):
        res = a+b+c
        print(res)

ca = Calculator()
ca.add(10,20,30)
ca.add(10,20)
ca.add(10)

# Overwriting
class Res:
    def place_order(self):
        print("Ordered placed frpm Gen Res")
class Veg(Res):
    def place_order(self):
        print("Placed from Veg Res")
class NonVeg(Res):
    def place_order(self):
        print("Placed from NonVeg Res")

def order(r:Res):
    r.place_order()

order(Veg())
order(NonVeg())
order(Res())