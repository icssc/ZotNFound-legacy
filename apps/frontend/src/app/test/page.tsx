import Form from "../../components/SST_Test/SST_Form";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Resource } from "sst";

export default async function FormPage() {
  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: Resource.MyBucket.name,
  });
  const url = await getSignedUrl(new S3Client({}), command);
  return (
    <>
      <Form url={url}></Form>
    </>
  );
}
