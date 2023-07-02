import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'validation';
import { Box } from 'components/Box';
import { TextInput, TextInputBox, phoneFilter } from 'components/TextInput';
import { Button } from 'components/Button';
import { RadioButton, RadioButtonBox } from 'components/RadioButton';
import { Upload } from 'components/Upload';
import { isDisabledButton } from './isDisabledButton';
import { inputCopy } from './inputCopy';
import { useDispatch, useSelector } from 'react-redux';
import { postUser } from 'redux/service/user.service';
import { getUsers } from 'redux/service';
import { selectUsers } from 'redux/selectors';

export const Form = () => {
    const [input, setInput] = useState({});
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {
        usersList: { page },
    } = useSelector(selectUsers);

    const { register, handleSubmit, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (e) => {
        const userData = inputCopy(e);

        const dispatched = async () => {
            const postedUser = await dispatch(postUser(userData));

            if (postedUser.type === 'users/postUser/fulfilled' && page === 1) {
                dispatch(
                    getUsers({
                        params: {
                            page: '1',
                            count: '6',
                        },
                    })
                );
            }
        };

        dispatched();

        setInput({});
        setError(null);
        (() => {
            ['name', 'email', 'phone', 'photo'].map((item) =>
                setValue(item, '')
            );
        })();
    };

    const onError = (e) => {
        setError(e);
    };

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            ...(e.target?.id === 'file-upload'
                ? { photo: e.target?.files[0] }
                : { [e.target.id]: e.target.value }),
        }));

        if (e.target?.id === 'phone') {
            const formatPhoneNumber = phoneFilter(e.target?.value);

            setValue('phone', formatPhoneNumber);
        }
    };

    return (
        <Box
            as={'form'}
            onSubmit={handleSubmit(onSubmit, onError)}
            onChange={handleChange}
        >
            <TextInputBox>
                <TextInput register={register} input={input} error={error} />
            </TextInputBox>
            <RadioButtonBox>
                <RadioButton register={register} />
            </RadioButtonBox>
            <Upload register={register} error={error?.photo} input={input} />
            <Box
                width={'100%'}
                display={'flex'}
                justifyContent={'center'}
                mt={50}
            >
                <Button
                    type={'submit'}
                    variant={'primary'}
                    disabled={isDisabledButton(input)}
                >
                    Sign up
                </Button>
            </Box>
        </Box>
    );
};
