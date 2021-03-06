import { Form, Button } from 'react-bootstrap'

const PetForm  = (props) => {
    const {pet, handleChange, handleSubmit} = props
return(
    <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="what is your pet's name?"
                    value={pet.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Type</Form.Label>
                <Form.Control 
                    placeholder="what type of animal is your pet?"
                    value={pet.type}
                    name='type'
                    onChange={handleChange}
                />
                <Form.Label>Age</Form.Label>
                <Form.Control 
                    placeholder="what is your pet's age?"
                    value={pet.age}
                    type="number"
                    name='age'
                    onChange={handleChange}
                />
                <Form.Check 
                    label='is this pet adoptable?'
                    name='adoptable'
                    defaultChecked={pet.adoptable}
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>  
    )
}

export default PetForm

