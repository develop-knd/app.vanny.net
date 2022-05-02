declare var $ : any;
declare var window : any;

export function ask(opt:any, callback:any):void {
    
let tmpFrm = "";
for (let tmpInt = 0; tmpInt < opt.items.length; tmpInt++) {
  let tmpAct = opt.items[tmpInt];
  switch (tmpAct.type) {
    default:
      tmpFrm += `
        <div class="form-group">
          <label>${tmpAct.text}</label>
          <input type="text" class="form-control askDat" data-field="${tmpAct.field}" />
        </div>`;
      break;
  }
}

let tmpBtn = "";
tmpBtn += `<button type="button" data-bs-dismiss="modal" class="btn btn-primary" onclick="window['askCallBack']('ok')">Aceptar</button>`;
tmpBtn += `<button type="button" data-bs-dismiss="modal" class="btn btn-secondary"onclick="window['askCallBack']('cancel')">Cancelar</button>`;

let tmpMod = $(`
  <div class="modal modTmp" role="dialog" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <p>${opt.text}</p>
          <form>
            ${tmpFrm}
          </form>
        </div>
        <div class="modal-footer">
          ${tmpBtn}
        </div>
      </div>
    </div>
  </div>`).appendTo("body").modal('show');
  
  window["askCallBack"] = (ret:string) => {
    let tmpFrm = tmpMod.find(".askDat");
    let tmpObj:any = {
      ret: ret,
      data: []
    };
    for (let tmpSub = 0; tmpSub < tmpFrm.length; tmpSub++) {
      let tmpEle = $(tmpFrm[tmpSub]);
      let tmpFld = tmpEle.attr("data-field");
      let tmpVal = tmpEle.val();
      tmpObj.data.push({
        field: tmpFld,
        value: tmpVal
      });
    }
    $(".modTmp").remove();
    callback(tmpObj);
  }
  
}
