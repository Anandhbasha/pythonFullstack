# pip install numpy
import numpy as np
# 1d array
# arr1 = np.array([10,20,30])
# arr2 = np.array([10,20,30],[50,60,80])
arr3 = np.array([[10,20,30],[50,60,80],[55,44,22]])

# zero = np.zeros((3,4))
# print(zero)

# print(arr3[1,2])


# pandas
# pip install pandas
import pandas as pd
# s1 = pd.Series([1,2,3,4],index=['a','b','c','d'])
# print(s1)

# print(s1*2)
# print(s1['a'])

# dataframes
data = {
    "Name":["Arun","bala","Chandru"],
    "Age":[20,30,22],
    "City":["Erode","CBE","Salem"]
}

df = pd.DataFrame(data,index=["a","b","c"])
print(df)
print(df.head(1))
print(df[df['Age']>21])


#  pip install openpyxl
df.to_excel("studs.xlsx",index=False)



# Numpy array creation,indexing operation
# 1D array

import numpy as np

# arr1 = np.array([10,20,30,40])

# print(arr1)

# # 2D array
# arr2 = np.array([[1,2],[3,4]])

# print(arr2)

# user_input = input("Enter the value")

# num_list = user_input.split()

# num_list = [int(i) for i in num_list]

# arr = np.array(num_list)
# print(arr)


# 3d array
# arr3 = np.array([[2,4],[10,20],[8,7]])

# print(arr3)

# zeroarr = np.zeros((3,4))

# print(zeroarr)


# onearr = np.ones((2))
# print(onearr)

# diagonal = np.eye(3)

# print(diagonal)


# defRange = np.arange(0,12,2)
# print(defRange)

# equal interval
# equal = np.linspace(0,1,5)
# print(equal)


# indexing

# twodarry = np.random.rand(2)
# print(twodarry)

# arr = np.array([10,20,30,40,50,60])
# print(arr[0])
# print(arr[0:2])
# array2 = np.array([[100,200,300],[80,90,77]])

# print(array2[1,2])
# print(array2)

# print(array2[:,1])

# # print(array2[0:2, 1:0])

# arr = np.array([10,20,30])
# arr1 = np.array([50,60,70])
# print(arr[arr>10])
# print(arr+arr1)

# # reshape

# arr = np.arange(12)
# res = arr.reshape(3,4)
# print(res)

# flat = res.flatten()
# print(flat)



# import pandas as pd

# s1 = pd.Series([1,3,5,7,9])
# # print(s1)

# s2 = pd.Series([10,20,30,40],index=["a","b","c","d"])
# # s2 = pd.Series([10,20,30,40])

# # print(s2)

# # fruits = {"apple":3,"kiwi":2,"banana":5}

# # seriesFruits = pd.Series(fruits)
# # print(seriesFruits)

# # print(s1*2)
# # print(s1+s2)

# # boolean
# # print(s2[s2>15])
# # print(s2['a'])

# # dataframe
# # data = {
# #     "Name":["xyz","abc","def"],
# #     "age":[20,30,32],
# #     "city":["CBE","Salem","Erode"]
# # }

# # df = pd.DataFrame(data)
# # df = pd.DataFrame(data,index=["first","second","third"])
# # print(df)

# # print(df.head(2))
# # print(df.tail(1))
# # print(df.shape)
# # print(df.columns)
# # print(df.dtypes)

# # df['email'] = ["abc@gmail.com","xyz@gmail.com","def@gmail.com"]

# # print(df)

# # print(df.loc['first'])

# # print(df.loc[0,2,'Name'])
# # print(df.loc[0:2,"Name"])
# # print(df.loc[0])
# # print(df.iloc[0:2,0:2])
# # 
# # df.to_csv("out.csv" ,index=True)
# # df.to_csv("output.csv" ,index=False)

# # print(df[(df['age']>20)])


# data = {
#     "Name":["xyz","abc","def"],
#     "age":[20,30,32],
#     "city":["CBE","Salem","Erode"]
# }

# df = pd.DataFrame(data)
# # scalar
# # print(df.at[0,'email'])
# # print(df.iat[0,0])


# df['email'] = ["abc@gmail.com","xyz@gmail.com","def@gmail.com"]
# # Multiple condition
# # print(df[(df['age']>20) & (df['email']=="def@gmail.com")])


# # isin()
# # print(df[(df['city'].isin(['Salem','CBE']))])

# # query
# # print(df.query("age>30 and city=='Erode'"))

# df.to_excel("newdata.xlsx",sheet_name="Students" ,index=False)

# readData =pd.read_excel('newdata.xlsx')
# print(readData)