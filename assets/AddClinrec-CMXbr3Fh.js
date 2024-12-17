import{_ as U,r as V,c as m,a,b as t,u as o,w as n,F as k,d as I,e as D,E as r,f as N,g as E,o as p,h as F,i as v,j as i,k as c,l as f,m as z,n as b,p as g,q as B,t as x}from"./index-C2b2S6EK.js";const S={class:"container"},L={class:"form"},P={class:"form-group"},T={class:"form-group"},j={class:"form-group"},q={class:"icd-codes row"},A={class:"inline-form"},M={class:"form-group row"},O={class:"column"},Y={class:"column"},H={class:"column"},R={class:"form-group row"},G={class:"column"},J={class:"column"},K={class:"column"},Q={class:"form-group"},W={class:"upload-wrapper"},X={key:0,class:"uploaded-files"},Z={class:"button-group"},$={__name:"AddClinrec",setup(h){const l=V({documentId:"",diseaseName:"",icdCodes:["","",""],ageCategory:"",status:"",usage:"",approvalDate:"",publicationDate:"",revisionDate:"",pdf_file:null}),u=V([]),y=d=>{const e=d.type==="application/pdf",s=d.size/1024/1024<5;return e?s?!0:(r.error("Файл должен быть меньше 5MB!"),!1):(r.error("Только PDF файлы разрешены!"),!1)},C=async d=>{try{l.value.pdf_file=d.file}catch(e){console.error("Ошибка загрузки файла:",e),r.error("Ошибка при загрузке файла!")}},_=async()=>{if(!l.value.pdf_file){r.error("Необходимо загрузить PDF-файл!");return}try{const d=new FormData;d.append("document_id",l.value.documentId),d.append("name",l.value.diseaseName);const e=l.value.icdCodes.join(" ");d.append("mkb_code_list",e),d.append("age_category",l.value.ageCategory),d.append("approval_year",l.value.approvalDate?new Date(l.value.approvalDate).getFullYear():null),d.append("revision_year",l.value.revisionDate?new Date(l.value.revisionDate).getFullYear():null),d.append("date_publication",l.value.publicationDate?new Date(l.value.publicationDate).toISOString().split("T")[0]:null),d.append("status",l.value.status),d.append("usage",l.value.usage),d.append("pdf_file",u.value[0]?u.value[0].url:l.value.pdf_file);const s=await N.createDocument(d);r.success("Данные успешно сохранены!"),E.push("/")}catch(d){console.error("Ошибка сохранения данных:",d),r.error("Ошибка при сохранении данных!")}},w=()=>{l.value={documentId:"",diseaseName:"",icdCodes:["","",""],ageCategory:"",status:"",usage:"",approvalDate:"",publicationDate:"",revisionDate:"",pdf_file:null},u.value=[]};return(d,e)=>(p(),m("div",S,[e[24]||(e[24]=a("img",{src:F,alt:"Логотип",class:"logo"},null,-1)),e[25]||(e[25]=a("h1",{class:"title"},"Добавить клинические рекомендации",-1)),a("div",L,[a("div",P,[e[11]||(e[11]=a("label",{for:"documentId",class:"label"},"ID документа",-1)),t(o(v),{id:"documentId",modelValue:l.value.documentId,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value.documentId=s),class:"input",placeholder:"Введите ID документа",style:{width:"15vw"}},null,8,["modelValue"])]),a("div",T,[e[12]||(e[12]=a("label",{for:"diseaseName",class:"label"},"Наименование заболевания",-1)),t(o(v),{id:"diseaseName",modelValue:l.value.diseaseName,"onUpdate:modelValue":e[1]||(e[1]=s=>l.value.diseaseName=s),class:"input",placeholder:"Введите наименование заболевания"},null,8,["modelValue"])]),a("div",j,[e[13]||(e[13]=a("label",{class:"label"},"Код МКБ",-1)),a("div",q,[t(o(v),{modelValue:l.value.icdCodes[0],"onUpdate:modelValue":e[2]||(e[2]=s=>l.value.icdCodes[0]=s),class:"input icd-input",placeholder:"Код 1"},null,8,["modelValue"]),t(o(v),{modelValue:l.value.icdCodes[1],"onUpdate:modelValue":e[3]||(e[3]=s=>l.value.icdCodes[1]=s),class:"input icd-input",placeholder:"Код 2"},null,8,["modelValue"]),t(o(v),{modelValue:l.value.icdCodes[2],"onUpdate:modelValue":e[4]||(e[4]=s=>l.value.icdCodes[2]=s),class:"input icd-input",placeholder:"Код 3"},null,8,["modelValue"])])]),a("div",A,[a("div",M,[a("div",O,[e[14]||(e[14]=a("label",{class:"label"},"Возрастная категория",-1)),t(o(c),{modelValue:l.value.ageCategory,"onUpdate:modelValue":e[5]||(e[5]=s=>l.value.ageCategory=s),class:"input",placeholder:"Выберите возрастную категорию",size:"large"},{default:n(()=>[t(o(i),{label:"Дети",value:"Дети"}),t(o(i),{label:"Взрослые",value:"Взрослые"}),t(o(i),{label:"Взрослые, Дети",value:"Взрослые, Дети"})]),_:1},8,["modelValue"])]),a("div",Y,[e[15]||(e[15]=a("label",{class:"label"},"Статус",-1)),t(o(c),{modelValue:l.value.status,"onUpdate:modelValue":e[6]||(e[6]=s=>l.value.status=s),class:"input",placeholder:"Выберите статус",size:"large"},{default:n(()=>[t(o(i),{label:"Действует",value:"Действует"}),t(o(i),{label:"Утратил силу",value:"Утратил силу"})]),_:1},8,["modelValue"])]),a("div",H,[e[16]||(e[16]=a("label",{class:"label"},"Применение",-1)),t(o(c),{modelValue:l.value.usage,"onUpdate:modelValue":e[7]||(e[7]=s=>l.value.usage=s),class:"input",placeholder:"Выберите применение",size:"large"},{default:n(()=>[t(o(i),{label:"Применяется",value:"Применяется"}),t(o(i),{label:"Применение отложено",value:"Применение отложено"})]),_:1},8,["modelValue"])])])]),a("div",R,[a("div",G,[e[17]||(e[17]=a("label",{class:"label"},"Дата утверждения",-1)),t(o(f),{modelValue:l.value.approvalDate,"onUpdate:modelValue":e[8]||(e[8]=s=>l.value.approvalDate=s),type:"date",placeholder:"Выберите дату",class:"input",size:"large"},null,8,["modelValue"])]),a("div",J,[e[18]||(e[18]=a("label",{class:"label"},"Дата публикации",-1)),t(o(f),{modelValue:l.value.publicationDate,"onUpdate:modelValue":e[9]||(e[9]=s=>l.value.publicationDate=s),type:"date",placeholder:"Выберите дату",class:"input",size:"large"},null,8,["modelValue"])]),a("div",K,[e[19]||(e[19]=a("label",{class:"label"},"Дата пересмотра",-1)),t(o(f),{modelValue:l.value.revisionDate,"onUpdate:modelValue":e[10]||(e[10]=s=>l.value.revisionDate=s),type:"date",placeholder:"Выберите дату",class:"input",size:"large"},null,8,["modelValue"])])]),a("div",Q,[e[21]||(e[21]=a("label",{class:"label"},"Файл клинических рекомендаций",-1)),a("div",W,[t(o(B),{class:"upload","http-request":C,"file-list":u.value,"before-upload":y,multiple:"false","show-file-list":""},{default:n(()=>[u.value.length===0?(p(),z(o(g),{key:0,class:"upload-button"},{default:n(()=>e[20]||(e[20]=[b("Загрузить")])),_:1})):D("",!0)]),_:1},8,["file-list"]),u.value.length>0?(p(),m("div",X,[(p(!0),m(k,null,I(u.value,s=>(p(),m("span",{key:s.name},x(s.name),1))),128))])):D("",!0)])]),a("div",Z,[t(o(g),{type:"primary",class:"save-button",onClick:_},{default:n(()=>e[22]||(e[22]=[b(" Сохранить клинрек ")])),_:1}),t(o(g),{type:"danger",class:"cancel-button",onClick:w},{default:n(()=>e[23]||(e[23]=[b(" Отменить ")])),_:1})])])]))}},le=U($,[["__scopeId","data-v-71c6bf88"]]);export{le as default};
