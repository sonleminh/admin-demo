// Get articles list

import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { deleteRequest, getRequest, postRequest } from '../axios';
import { IArticle, ICreateArticle } from '../../interfaces/IArticle';
import { createFormData } from '@/utils/createFormdata';
