# no_of_wheels = 4
# airbags = 5
# milage = 20
# color = "red"

# def movingForword():
#     print("Acc pressed")
# def carStoppes():
#     print("Brake Pressed")

class Car:
    no_of_wheels = 4
    airbags = 5
    milage = 20
    color = "red"
    def movingForword():
        print("Acc pressed")
    def carStoppes():
        print("Brake Pressed")

car1 = Car()
car1.milage=60
car2=Car()
car2.milage=15
print(car1.milage)
print(car2.milage)
print(car1.airbags)
