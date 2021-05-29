import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Box } from '@fower/react';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const br = '%0a';
  const onSubmit = data => {
    console.log(data);
    const url = `https://twitter.com/intent/tweet?text=${data.content}${br}&hashtags=感謝`;
    window.open(url, '_blank');
  };
  return (
    <Box w='100%' toCenter column>
      <Box as='h1' toCenter>
        <Box mr-20>Tweet Template</Box>
        <SocialIcon network="twitter" />
      </Box>
      <Box
        as='form'
        w='80vw' h='260px' maxW-500
        column toBetween
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-multiline-static"
          label="Tweet"
          multiline
          placeholder="ここに入力"
          rows={8}
          color='secondary'
          variant="outlined"
          {...register("content", { required: true, maxLength: 190 })}
        />
        {errors.content && <Box red500 fontBold>⚠️1文字以上190字以内を入力してください</Box>}
        <Button
          variant='contained'
          color='secondary'
          type='submit'
        >
          送信
        </Button>
      </Box>
    </Box>
  );
}
