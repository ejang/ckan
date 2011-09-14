
CKAN.Templates.resourceAddChoice = ' \
  <ul> \
    <li>Add a resource:</li> \
    <li><a href="#" action="upload-file" class="action-resource-tab">Upload a file</a></li> \
    <li><a href="#" action="link-file" class="action-resource-tab">Link to a file</a></li> \
    <li><a href="#" action="link-api" class="action-resource-tab">Link to an API</a></li> \
  </ul> \
';

CKAN.Templates.resourceAddLinkFile = ' \
  <form class="resource-add" action=""> \
    <dl> \
      <dt> \
        <label class="field_opt" for="url"> \
          File URL \
        </label> \
      </dt> \
      <dd> \
        <input name="url" type="text" placeholder="http://mydataset.com/file.csv" style="width: 60%"/> \
        <input name="save" type="submit" class="pretty-button primary" value="Add" /> \
        <input name="reset" type="reset" class="pretty-button" value="Cancel" /> \
      </dd> \
    </dl> \
     \
  </form> \
';

CKAN.Templates.resourceAddLinkApi = ' \
  <form class="resource-add" action=""> \
    <dl> \
      <dt> \
        <label class="field_opt" for="url"> \
          Api URL \
        </label> \
      </dt> \
      <dd> \
        <input name="url" type="text" placeholder="http://mydataset.com/file.csv" style="width: 60%" /> \
        <input name="save" type="submit" class="pretty-button primary" value="Add" /> \
        <input name="reset" type="reset" class="pretty-button" value="Cancel" /> \
      </dd> \
    </dl> \
     \
  </form> \
';

CKAN.Templates.resourceUpload = ' \
<div class="fileupload"> \
  <form action="http://test-ckan-net-storage.commondatastorage.googleapis.com/" class="resource-upload" \
    enctype="multipart/form-data" \
    method="POST"> \
 \
    <div class="hidden-inputs"></div> \
    <dl> \
      <dt> \
        <label class="field_opt fileinput-button" for="file"> \
          File \
        </label> \
      </dt> \
      <dd> \
        <input type="file" name="file" /> \
        <span class="fileinfo"></span> \
        <input id="upload" name="upload" type="submit" class="pretty-button primary" value="Add" /> \
        <input id="reset" name="reset" type="reset" class="pretty-button" value="Cancel" /> \
      </dd> \
    </dl> \
  </form> \
  <div class="messages" style="display: none;"></div> \
  </div> \
</div> \
';



CKAN.Templates.resourceEntry = ' \
  <td class="resource-expand-link"> \
    <a class="resource-expand-link" href="#"><img src="/images/icons/edit-expand.png" /></a> \
    <a class="resource-collapse-link" href="#"><img src="/images/icons/edit-collapse.png" /></a> \
  </td> \
  <td class="resource-summary resource-url"> \
    ${resource.url} \
  </td> \
  <td class="resource-summary resource-format"> \
    ${resource.format} \
  </td> \
  <td class="resource-summary resource-description"> \
    ${resource.description} \
  </td> \
  <td class="resource-expanded" colspan="3"> \
    <dl> \
      <dt>Name</dt> \
      <dd> \
        <input name="resources__${num}__name" type="text" value="${resource.name}" class="long" /> \
      </dd> \
      <dt>Url</dt> \
      <dd> \
      {{if resource.resource_type=="file.upload"}} \
        ${resource.url} \
        <input name="resources__${num}__url" type="hidden" value="${resource.url}" /> \
      {{/if}} \
      {{if resource.resource_type!="file.upload"}} \
        <input name="resources__${num}__url" type="text" value="${resource.url}" class="long" /> \
      {{/if}} \
      </dd> \
      <dt>Format</dt> \
      <dd> \
        <input name="resources__${num}__format" type="text" value="${resource.format}" class="long autocomplete-format" /> \
      </dd> \
      <dt>Description</dt> \
      <dd> \
        <input name="resources__${num}__description" type="text" value="${resource.description}" class="long" /> \
      </dd> \
      <dt>Size (bytes)</dt> \
      <dd> \
        <input name="resources__${num}__size" type="text" value="${resource.size}" class="long" /> \
      </dd> \
      <dt>Mimetype</dt> \
      <dd> \
        <input name="resources__${num}__mimetype" type="text" value="${resource.mimetype}" /> \
      </dd> \
      <dt>Mimetype-inner</dt> \
      <dd> \
        <input name="resources__${num}__mimetype_inner" type="text" value="${resource.mimetype_inner}" /> \
      </dd> \
      <dt>Last Modified</dt> \
      <dd> \
        <input name="resources__${num}__last_modified" type="text" value="${resource.last_modified}" /> \
      </dd> \
      <dt>Resource Type</dt> \
      <dd> \
      {{if resource.resource_type=="file.upload"}} \
        ${resource.resource_type} \
        <input name="resources__${num}__resource_type" type="hidden" value="${resource.resource_type}" /> \
      {{/if}} \
      {{if resource.resource_type!="file.upload"}} \
        <input name="resources__${num}__resource_type" type="text" value="${resource.resource_type}" /> \
      {{/if}} \
      </dd> \
      <dt>Hash</dt> \
      <dd> \
        ${resource.hash || "Unknown"} \
        <input name="resources__${num}__hash" type="hidden" value="${resource.hash}" /> \
      </dd> \
      <dt>ID</dt> \
      <dd> \
        ${resource.id} \
        <input name="resources__${num}__id" type="hidden" value="${resource.id}" /> \
      </dd> \
    </dl> \
  </td> \
  <td class="resource-is-changed"> \
    <img src="/images/icons/add.png" title="This resource has unsaved changes." class="resource-is-changed" /> \
  </td> \
';