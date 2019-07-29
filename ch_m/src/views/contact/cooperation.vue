<template>
  <div class="form-div">
    <div class="top-c"><router-link :to="{name:'contact', path:'/contact'}"></router-link></div>
    <el-form :model="ruleForm2" status-icon ref="ruleForm2" :label-position="labelPosition" label-width="80px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="tel">
        <el-input type="tel" v-model="ruleForm2.tel" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="mail">
        <el-input type="text" v-model="ruleForm2.mail" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="国家/地区" prop="addr">
        <el-input v-model="ruleForm2.addr"></el-input>
      </el-form-item>
      <el-form-item label="项目名称" prop="projectName">
        <el-input v-model="ruleForm2.projectName"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="class">
        <el-select v-model="ruleForm2.class" placeholder="请选择活动区域">
          <el-option label="工业物联网" value="工业物联网"></el-option>
          <el-option label="人工智能" value="人工智能"></el-option>
          <el-option label="智能硬件" value="智能硬件"></el-option>
          <el-option label="健康" value="健康"></el-option>
          <el-option label="新能源" value="新能源"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上传BP" prop="upload">
      <el-upload
        class="upload-demo"
        action="http://admin.greenprosperitygroup.cn/applet/public/index.php//api/lzpc/file_post"
        :on-preview="handlePictureCardPreview"
        :on-success="handleAvatarSuccess"
        accept=".pdf"
        >
        <el-button size="small" type="primary"></el-button>
      </el-upload>
      <el-input v-model="ruleForm2.upload" class="uplod" placeholder="请选择活动区域"></el-input>
      </el-form-item>
      <div class="form-p">
        <p>仅限上传PDF类型的文件(单个文件20M)</p>
      </div>
      <el-form-item>
        <el-button class="btn" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      </el-form-item>
    </el-form>
    <div class="form-font">
      投递说明：<br/>
给我们提交的商业计划书建议包括以下方面的内容：<br/>
1·项目介绍：用一句话描述所做的项目；<br/>
2·产品/服务：产品/服务描述，包括功能，性能，结构，知识产权等等，以及产品/服务的开发计划；<br/>
3·市场分析：目标客户及特性，市场规模，目前公司的市场份额、市场地位；<br/>
4·竞争格局：列出现有的和潜在的竞争对手，并分析各自的竞争优势；<br/>
5·商业模式：收入模式、定价、市场推广及销售渠道、 现有客户和正在开发的客户清单；<br/>
6·团队描述：创始人和核心管理层、董事会成员和顾问委员会成员等；<br/>
7·财务资料：过去一到两年的资金及管理运作的简单财务报告，以及今后两年的销售预测，股东结构、一到两年之内的融资计划，包括资金需求量和资金用途等。
    </div>
  </div>  
</template>

<script>
import Qs from 'qs'
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error(''));
        }
      };
      return {
        labelPosition:"left",
        dialogImageUrl:"",
        fileList: [],
        ruleForm2: {
          name: '',
          tel: '',
          mail: '',
          addr: '',
          projectName:'',
          class:'',
          upload:''
        },
        rules2: {
          name: [
            { required: true }
          ],
          tel: [
            {required: true }
          ],
          mail: [
            { required: true}
          ],
          addr: [
            { required: true }
          ],
          projectName: [
            {required: true}
          ],
          class: [
            { required: true }
          ],
          upload: [
            { required: true }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            for(let i in this.ruleForm2){
              if(this.ruleForm2[i] == ''){
                if(i == "name"){
                  alert("请输入您的姓名")
                  return;
                }else if(i == "tel"){
                  alert("请输入您的手机号码")
                  return;
                }else if(i == "mail"){
                  alert("请输入您的电子邮箱")
                  return;
                }else if(i == "addr"){
                  alert("请输入您的国家/地区")
                  return;
                }else if(i == "projectName"){
                  alert("请输入您的项目名称")
                  return;
                }else if(i == "class"){
                  alert("请选择您的领域")
                  return;
                }
              }
            }
            if(this.ruleForm2.name && this.ruleForm2.tel && this.ruleForm2.mail && this.ruleForm2.addr && this.ruleForm2.projectName && this.ruleForm2.class){
              this.btnajax()
            }

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      btnajax(){
        let _data = {
          name: this.ruleForm2.name,
          mobile: this.ruleForm2.tel,
          email: this.ruleForm2.mail,
          country: this.ruleForm2.addr,
          project_name: this.ruleForm2.projectName,
          category: this.ruleForm2.class,
        }
        if (this.dialogImageUrl) {_data.file = this.dialogImageUrl;}
        this.axios.post('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/form_post',
             Qs.stringify(_data))
        .then((response)=>{
            if(response.data.msg == "ok"){
              alert("提交成功")
            }
            console.log(response)
        }).catch((response)=>{
            console.log(response)
        }) 
    },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleAvatarSuccess(response, file, fileList) {
        console.log(response);
        console.log(file)
        console.log(fileList)
        this.ruleForm2.upload = file.name
        this.dialogImageUrl = response.data.image
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        
        console.log(file);
      },
    }
  }
</script>
<style>
.form-div{
  position:relative;
  min-height: 100%;
    background: -webkit-linear-gradient(left, #53e1ff , #0e91ff);
}
.el-form{
  padding: 1.45rem 1rem 0.46rem 1rem;
}
.form-div .el-form-item{
  margin-bottom: 0.32rem;
}
.form-div .el-form-item .upload-demo{
  position: absolute;
  z-index: 10;
  width: 100%;
  left: 0;
  right: 0;
}
.form-div .el-form-item .upload-demo .el-upload{
  width: 100%;
}
.form-div .el-form-item .upload-demo .el-upload .el-button--small{
  width: 100%;
  padding: 0;
  height: 0.46rem;
  opacity: 0;
}
.uplod{
  position: relative;
}
.uplod::after{
  position: absolute;
  top: 0.13rem;
  right: 0.1rem;
  content: "";
  width: 0px;
		height: 0px;
		border-left: 0.14rem solid #666;
		border-top: 0.1rem solid transparent;
		border-right: 0.14rem solid transparent;
		border-bottom: 0.1rem solid transparent;
}
.uplod .el-input__inner{
  padding-right: 30px;
}
.form-div .el-form-item .el-form-item__label{
  line-height: 0.46rem;
}
.form-div .el-form-item .el-form-item__content{
  line-height: 0.46rem;
}
.form-div .el-form-item .el-form-item__content .el-form-item__error{
  padding-top: 0.03rem
}
.el-input .el-input__inner{
  height:0.46rem;
  border-radius: 0.4rem;
  width:3.92rem;
  line-height: 0.46rem;
}
.el-input .el-input__icon{
  line-height: 0.46rem;
}

.el-form-item__content .el-button--primary.btn{
  width: 1.8rem;
  height:0.46rem;
  margin-top: 0.72rem;
  padding: 0;
  border-radius: 0.4rem;
  background: #ff9900;
    
}
.el-form-item__content .el-button--primary:focus, .el-form-item__content .el-button--primary:hover{
    background: #ff9900
}
.el-upload-list.el-upload-list--text{
  display: none;
}
.form-p p{
  text-align: right;
  font-size: 0.14rem;
}
.form-font{
  font-size: 0.24rem;
  line-height: 200%;
  padding: 0 0.7rem;
}
</style>
