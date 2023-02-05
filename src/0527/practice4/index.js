import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sex: "",
      education: "",
      description: "",
      errors: {},
    };

    this.fileInput = React.createRef();
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value.toUpperCase(),
    });

    if (e.target.value === "") {
      this.setState({
        errors: {
          name: "請填寫姓名",
        },
      });
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          name: null,
        },
      });
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { sex, name, education, description, errors } = this.state;
    const formData = {
      sex,
      name,
      education,
      description,
      avatar: this.fileInput.current.files[0],
    };

    if (!errors.name) {
      console.log(formData);

      this.setState({
        name: "",
        sex: "",
        education: "",
        description: "",
      });

      this.fileInput.current.value = null;
    }
  };

  render() {
    const { handleNameChange, handleChange, handleSubmit, fileInput } = this;
    const { name, sex, education, description, errors } = this.state;
    return (
      <form id="form" onSubmit={handleSubmit}>
        <div>
          <label>姓名</label>
          <input
            name="name"
            type="text"
            id="nameInput"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>
        <div>
          <label>性別</label>
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              checked={sex === "male"}
              onChange={handleChange}
            />
            男性
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              checked={sex === "female"}
              onChange={handleChange}
            />
            女性
          </label>
        </div>
        <div>
          <label>最高學歷</label>
          <select name="education" value={education} onChange={handleChange}>
            <option value="junior">國中</option>
            <option value="senior">高中</option>
            <option value="university">大學</option>
          </select>
        </div>
        <div>
          <label>自我介紹</label>
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>個人圖片上傳</label>
          <input type="file" id="fileInput" name="avatar" ref={fileInput} />
        </div>
        <div>
          <label>送出按鈕</label>
          <input type="submit" />
        </div>
      </form>
    );
  }
}
