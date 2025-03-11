export const FilterMain = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "beige", label: "Beige" },
            { value: "blue", label: "Blue" },
            { value: "brown", label: "Brown" },
            { value: "green", label: "Green" },
            { value: "purple", label: "Purple" },
            { value: "yellow", label: "Yellow" }
        ],
    },
    {

        id:"size",
        name:"Size",
        options:[
            {value:"s",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"}
        ],
    },
];

export const singleFilter = [
    
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399", label:"₹159 To ₹399"},
            {value:"399-999", label:"₹399 To ₹999"},
            {value:"999-1999", label:"₹999 To ₹1999"},
            {value:"1999-2999", label:"₹1999 To ₹2999"},
            {value:"2999-3999", label:"₹2999 To ₹3999"},
    

        ],
    },
    

    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10%", label: "10% or more" },
            { value: "20%", label: "20% or more" },
            { value: "30%", label: "30% or more" },
            { value: "40%", label: "40% or more" },
            { value: "50%", label: "50% or more" },
            { value: "60%", label: "60% or more" },
            { value: "70%", label: "70% or more" },
            { value: "80%", label: "80% or more" },
            { value: "90%", label: "90% or more" }
        ]
    }
];
