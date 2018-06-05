import  React from 'react';
import {Table,Upload,Button,message,Input,Form} from 'antd';
import './Page1.css';
import image from './images/1.jpg';
import {connect} from 'react-redux';
import {fetchPage,addPage, deletePage, updatePage, searchPage} from '../../action/pageAction.js';
import AddModal from './Modal.js';
// require('./Page1.css');

// function mapStateToProps(state) {
// 	return {page: state.page}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		fetchPage: () => dispatch(fetchPage()),
// 		addPage: (param) => dispatch(addPage(param))
// 	}
// }

// const props = {
// 	name: 'file',
// 	action: '',//上传的地址
// 	// headers: {//头部信息
// 	//   authorization: 'authorization-text',
// 	// },
// 	onChange(info) {
// 		console.log("..../info",info);
// 	  if (info.file.status !== 'uploading') {
// 		console.log(info.file, info.fileList);
// 	  }
// 	  if (info.file.status === 'done') {
// 		message.success(`${info.file.name} file uploaded successfully`);
// 	  } else if (info.file.status === 'error') {
// 		message.error(`${info.file.name} file upload failed.`);
// 	  }
// 	},
//   };
	const Search = Input.Search;
	const FormItem = Form.Item;

  class Page1 extends React.Component {
	constructor(props) {
		super(props);
		// this.start = this.start.bind(this);
		this.state = {
			page: [],
			selectedRowKeys: [],
			record:{},
			addVisible: false,
			addKey: 0
		};
	}

	componentDidMount() {
		// console.log("........",fetchPage());
		const promise = fetchPage();
		// console.log("----==promise",promise);
		promise.then((res)=>{
			this.setState({
				page: res
			})
			// console.log(res,"----");
		})
		// updatePage({id:3});
		// this.props.addPage({title:"first",author:"tom"});
	}

	//增加显示弹框
	pageAdd() {
		console.log("------add");
		this.setState({
			addVisible: true
		})
	}

	//增加具体实现方法
	addHandleOk(value) {
		console.log('----add',value);
		addPage({title:value.title,author:value.author}).then(()=>{
			fetchPage().then((res)=>{
				this.setState({
					page: res
				})
			})	
		});
		this.setState({
			addVisible:false,
			addKey: this.state.addKey + 1
		})
	}

	pageDelete() {
		console.log("------delete");
		deletePage({id:this.state.selectedRowKeys}).then(()=>{
			fetchPage().then((res)=>{
				this.setState({
					page:res
				})
			})
		})
	}

	onSelectChange(selectedRows) {
		let id = [];
		let record = {};
		if (selectedRows.length != 0) {
			selectedRows.map(e=>id.push(e.id));
		}
		if (selectedRows.length == 1) {
			record = selectedRows[0];
		}		
		this.setState({
			selectedRowKeys: id,//存放选择的行
			record: record
		});
		for(var i = 0; i < this.state.selectedRowKeys.length;i++)
			console.log(this.state.selectedRowKeys[i],"++++++");
		console.log(record)		
	}

	// onSearch(value) {
	// 	console.log(value);
	// }

	//搜索
	handleOk() {
		this.props.form.validateFields((errors, values)=>{
			if(!!errors){
				return;
			}
			console.log(values,"/*/*/*/");
			searchPage(values).then((res)=>{
				
					console.log(res,"~~~~~~~")
					this.setState({
						page: res
					})
				
			});
		})
	}

	handleCancel() {
		console.log("cancel");
		this.setState({
			addVisible: false 
		})
	}

	refrash() {
		fetchPage().then((res)=>{
			this.setState({
				page: res
			})
		})
	}

	render() {
		// console.log("=====");
		// let data = this.props.page ? this.props.page.data : [];
		// console.log('....page',this.props);
		const columns = [{
			title:'序号',
			key:'number',
			render:(text,record,index) => (
				<span>{index+1}</span>
			)},{
				title:"ID",
				dataIndex:'id',
				key:'id'
			},{
				title: "标题",
				dataIndex:"title",
				key:'title'
			},{
				title:'作者',
				dataIndex:'author',
				key:'author'
			}
		];
		let data = this.state.page ? this.state.page : [];
		// console.log("record",(record)=>record.id);
		const {selectedRowKeys} = this.state;
		const {getFieldDecorator} = this.props.form;
		const rowSelection = {
			selectedRowKeys,
			onChange:(selectedRowKeys, selectedRows) => {
				this.onSelectChange(selectedRows);
				// console.log("--------selectedRowKeys", selectedRowKeys);
				// console.log("-----selectedRows",selectedRows)
			}
		}
		return (
			<div className='page'>
				<div className='page-search'>
				<Form layout="inline">
					<FormItem>
						{getFieldDecorator('title',{						
						})(
							<Input placeholder='title'/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('author',{
						})(
							<Input placeholder='author'/>
						)}
					</FormItem>
					<FormItem>
						<Button onClick={this.handleOk.bind(this)}>搜索</Button>
					</FormItem>
				</Form>
				</div>
				<div className='page-button'>
					<Button onClick={this.pageAdd.bind(this)}>增加</Button>
					<Button onClick={this.pageDelete.bind(this)}>删除</Button>
					<Button onClick={this.refrash.bind(this)}>刷新</Button>
				</div>
				<div style={{clear:"both"}}/>{/*清除float的影响*/}
				{/* <Search
					placeholder="title"
					onSearch={(value)=>{this.onSearch(value)}}
					enterButton="搜索"
				/>  */}
				<div className='page-table'>
					<Table
						dataSource={data}
						columns={columns}
						rowKey='id'
						pagination={false}
						bordered={true}
						rowSelection={rowSelection}
					/>
				</div>
				<AddModal
					visible={this.state.addVisible}
					onOk={this.addHandleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
					key={this.state.addKey}
				/>
			</div>
			// <div className='page-box'>
			// <p>{this.state.page}</p>
			// 	{/* This is page1 */}
			// 	<img src={image} />
			// </div>
			// <Upload {...props}>
			// 	<Button>
			// 		Click to Upload
			// 	</Button>
			// </Upload>
		)
	}
} 

	const page = Form.create()(Page1);
	export default page;
// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Page1)
