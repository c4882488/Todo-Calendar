import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sex: "",
      education: "",
      description: "",
    };

    this.fileInput = React.createRef();
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSexChange = (e) => {
    this.setState({
      sex: e.target.value,
    });
  };

  handleEducationChange = (e) => {
    this.setState({
      education: e.target.value,
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, sex, education, description } = this.state;
    const formData = {
      name,
      sex,
      education,
      description,
      avatar: this.fileInput.current.files[0],
    };

    console.log("formData", formData);

    this.setState({
      name: "",
      sex: "",
      education: "",
      description: "",
    });
    this.fileInput.current.value = null;
  };

  render() {
    const {
      fileInput,
      handleNameChange,
      handleSexChange,
      handleEducationChange,
      handleDescriptionChange,
      handleSubmit,
    } = this;
    const { name, sex, education, description } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>姓名</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>性別</label>
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              checked={sex === "male"}
              onChange={handleSexChange}
            />
            男性
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              checked={sex === "female"}
              onChange={handleSexChange}
            />
            女性
          </label>
        </div>
        <div>
          <label>最高學歷</label>
          <select
            name="education"
            value={education}
            onChange={handleEducationChange}
          >
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
            onChange={handleDescriptionChange}
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
