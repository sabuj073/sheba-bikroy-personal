import { useState } from "react";
import Input from "../Components/Input/Input";
import InputFile from "../Components/Input/InputFile";
import SelectBox from "../Components/Input/SelectBox";

const CreateChildCategory = () => {
	const [childCategory, setChildCategory] = useState({});

	const categories = [
		{ id: 1, value: 'electronic', name: 'Electronic' },
		{ id: 2, value: 'fashion', name: 'Fashion' },
		{ id: 3, value: 'baby', name: 'Baby' },
	];
	const subCategories = [
		{ id: 1, value: 'mobile', name: 'mobile' },
		{ id: 2, value: 't-shirt', name: 't-shirt' },
		{ id: 3, value: 'mam', name: 'Mam' },
	];
	const inputHandler = (event) => {
		const { name, value } = event.target;

		setChildCategory((state) => ({
			...state,
			[name]: value,
		}))
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(childCategory);
	}
	return (
		<div className="create__category mt-3">
			<form
				onSubmit={submitHandler}
				className="create__category__form bg-white shadow-sm p-4"
			>
				<h2 className="cms__title mb-4">Create Child Category</h2>

				<Input
					label="Child Category Name  "
					option="(English Language)"
					name="child_category_name"
					type="text"
					placeholder="Enter Child Category Name"
					onChange={inputHandler}
					required={true}
				/>

				<Input
					label="Child Category Name"
					option="(Bangla Language) (optional)"
					name="child_category_bangla"
					type="text"
					placeholder="Enter Child Category Name (bangla)"
					onChange={inputHandler}
					required={false}
				/>

				<SelectBox
					label="Select Category"
					name="category"
					required={true}
					options={categories}
					onChange={inputHandler}
				/>
				<SelectBox
					label="Select Sub Category"
					name="subCategory"
					required={true}
					options={subCategories}
					onChange={inputHandler}
				/>

				<Input
					label="Child Category Slug"
					name="meta_title"
					type="text"
					placeholder="Enter Child Category Slug"
					onChange={inputHandler}
					required={true}
				/>


				<Input
					label="Meta Title"
					name="meta_title"
					type="text"
					placeholder="Enter Meta Title"
					onChange={inputHandler}
					required={false}
				/>

				<Input
					label="Meta Description"
					name="meta_description"
					type="text"
					placeholder="Enter Meta Description"
					onChange={inputHandler}
					required={false}
				/>

				<InputFile
					label="Child Category Image"
					name="category_icon"
					onChange={inputHandler}
					multiple={false}
					required={true}
				/>
				<div className="text-center">
					<button type="submit" className="btn btn-success me-3">
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateChildCategory;
