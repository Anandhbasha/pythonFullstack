from django.shortcuts import render,redirect

from .models import Student
# Create your views here.
def add_students(request):
    if request.method=="POST":
        name=request.POST['name']
        email = request.POST["email"]
        age = request.POST["age"]
        Student.objects.create(name=name,email=email,age=age)
        return redirect('list_students')
    return render(request,'add_students.html')

# read 
def list_students(request):
    students = Student.objects.all()
    return render(request,"list_students.html",{
        "students":students
    })
# update
def edit_student(request,id):
    student = Student.objects.get(id=id)
    if request.method=="POST":
        student.name=request.POST['name']
        student.email=request.POST['email']
        student.age=request.POST['age']
        student.save()
        return redirect("list_students")
    return render(request,"edit_student.html",{"student":student})

# Delete
def delete_student(request,id):
    student = Student.objects.get(id=id)
    student.delete()
    return redirect("list_students")

