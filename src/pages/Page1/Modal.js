import React from 'react';
import {Form,Input,Modal} from 'antd';

const FormItem = Form.Item;

class PageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    handleOk = () => {
        this.props.form.validateFields((errors, values)=>{
            if(!!errors) {
                console.log('add-modal-error');
                return;
            }
            this.props.onOk(values);
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Modal 
                    visible={this.props.visible}
                    title="增加"
                    onCancel={this.props.onCancel}
                    onOk={this.handleOk}
                >
                <Form>
                    <FormItem>
                        {getFieldDecorator('title',{
                            rules:[{
                                message:'请输入标题',
                                required:true
                            }]
                        })(
                            <Input placeholder='标题'/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('author',{
                            rules:[{
                                message:'请输入作者',
                                required: true
                            }]
                        })(
                            <Input placeholder='作者' />
                        )}
                    </FormItem>
                </Form>
                </Modal>
            </div>
        )
    }
}

const pageModal = Form.create()(PageModal);
export default pageModal;