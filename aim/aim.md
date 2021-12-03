# **AIM OF THIS PROJECT**

## **Description**

Generally we use [**faker.js**](https://github.com/Marak/faker.js) & make object of our classes, interfaces or any variables manually by doing & reading documentation of faker.js what's actually suite with our object. But gotcha is here. I Want I just pass the object or anything to faker and that gives me proper object whats our model demand. A simple example with input & output is bellow, Have a look.
<br>
Thanks

<br>

## **Input**

```

export interface member {
  firstName: string;
  lastName: string;
  suffix: string;
  contactNo: string;
}

const customer : member =
{
     firstName: "",
     lastName: "",
     suffix: "",
     contactNo: ""
};

const validCustomerWithFakeInfo = faker.create(customer);

```

<br>

## **Output**

```

console.log(validCustomerWithFakeInfo);

{ Pete,Towne,DVM,821-385-8873} // result
```

<br>

## **Minimal Implementation**

<img src="../screenshots\minimal_implementation.png" style="padding:10px;border-radius:20px">
