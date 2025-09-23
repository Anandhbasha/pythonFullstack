# arithmetic(Math Operation)
# +,-,*,/,//,%,**
a=10
b=5
print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a//b)
print(a%b)
print(a**b)

# Comparition(Relation) Operator
x=10
y=5
print(x==y)
print(x!=y)
print(x>y)
print(x<y)
print(x<=y)
print(x>=y)

# logical Opeartor

print(x>=y and x!=y and x<y)
print(x>=y or x!=y or x<y)
age=19
print(not age<18)

# Assignment Operator

num1=10
num1+=5
print(num1)

# membership 
mylist = [1,2,3,4]

print(2 in mylist)
print(10 not in mylist)

# Idendity operator
x=[1,2,3] #25
y=[1,2,3]
z=x 
print(x is y)
print(x is z)

# conditional Statements
x=10
if x>0:
    print("If is working")

for i in range(5):
    print(i)
    continue

with open("RUNNING.txt","r") as file:
    content = file.read()
    print(content)