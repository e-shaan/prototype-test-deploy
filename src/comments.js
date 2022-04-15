// in src/batches.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const CommentsList = (props) => (
  <List
    {...props}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="updatedby" />
      <TextField source="createdby" />
      <RichTextField source="text" />
      <ReferenceField label="Batch" source="batch_ref" reference="batches">
        <TextField source="title" />
      </ReferenceField>
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const CommentShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <RichTextField source="text" />
      <ReferenceField label="Batch" source="batch_ref" reference="batches">
        <TextField source="title" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const CommentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <RichTextInput source="text" />
      <ReferenceInput
        label="Batch"
        source="_DOCREF_batch_ref"
        reference="batches"
        // filter={{ isAdmin: true }}
      >
        <SelectInput label="User" optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const CommentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <RichTextInput source="text" />
      <ReferenceInput
        label="Batch"
        source="batch_ref"
        reference="batches"
        // filter={{ isAdmin: true }}
      >
        <SelectInput label="User" optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
