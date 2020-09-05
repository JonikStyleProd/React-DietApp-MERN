import React, {useState} from 'react';
import { Typography, Button, Form, message, Input, Icon, Select} from 'antd';
import './UploadProductPage.css'

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const Meals = [
    {key:1, value: "Breakfast"},
    {key:2, value: "Brunch"},
    {key:3, value: "Elevenses"},
    {key:4, value: "Lunch"},
    {key:5, value: "Tea"},
    {key:6, value: "Supper"},
    {key:7, value: "Dinner"},
]

function UploadProductPage() {
    const [TitleValue, setTitleValue] = useState('')
    const [DisctiprionValue, setDisctiprionValue] = useState('')
    const [PriceChange, setPriceChange] = useState(0)
    const [MealsChange, setMealsChange] = useState(1)

    const onTitleChange =(event) => {
        setTitleValue(event.currentTarget.value);
    }

    const onDiscriptionChange =(event) => {
        setDisctiprionValue(event.currentTarget.value);
    }

    const onPriceChange = (event) => {
        setPriceChange(event.currentTarget.value);
    }
    
    const onMealsChange =(event) => {
        setMealsChange(event.currentTarget.value);
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={5}>Upload Food</Title>
                <Title level={4}>Upload what you ate today!!!</Title>
            </div>

            <Form noSubmit>
                {/* DropZone */}


                <label>Meals</label>
                <Select className="selectMeals" onChange={onMealsChange}>
                    {Meals.map(item => ( 
                    <Option key={item.key} value={item.key}>{item.value}</Option>
                    ))}

                </Select>
                
                <br />
                <br />

                <label>Food Name</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                    className="nameFood"
                 />
                <br />
                <br />
                <label>Discription</label>
                <TextArea
                    onChange={onDiscriptionChange}
                    value={DisctiprionValue}
                    className="discription"
                 />
                 
                <br />
                <br />
                <label>Amount(g)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceChange}
                    type="number"
                    className="amount"
                />
                <br />
                <br />

                
                <Button type="primary"
                    
                >
                    Submit
                </Button>


            </Form>
        </div>
    )
}

export default UploadProductPage;
