import {
  DefaultBodyType,
  MockedRequest,
  Path,
  PathParams,
  ResponseResolver,
  rest,
  RestContext,
  RestHandler,
  RestRequest,
} from 'msw';

type mockCoreApi = {
  all: <
    RequestBodyType extends DefaultBodyType = DefaultBodyType,
    Params extends PathParams<keyof Params> = PathParams<string>,
    ResponseBody extends DefaultBodyType = DefaultBodyType
  >(
    path: Path,
    resolver: ResponseResolver<RestRequest<RequestBodyType, Params>, RestContext, ResponseBody>
  ) => RestHandler<MockedRequest<DefaultBodyType>>;
  head: <
    RequestBodyType_1 extends DefaultBodyType = DefaultBodyType,
    Params_1 extends PathParams<keyof Params_1> = PathParams<string>,
    ResponseBody_1 extends DefaultBodyType = DefaultBodyType
  >(
    path: Path,
    resolver: ResponseResolver<RestRequest<never, Params_1>, RestContext, ResponseBody_1>
  ) => RestHandler<MockedRequest<DefaultBodyType>>;
  get: <
    RequestBodyType_2 extends DefaultBodyType = DefaultBodyType,
    Params_2 extends PathParams<keyof Params_2> = PathParams<string>,
    ResponseBody_2 extends DefaultBodyType = DefaultBodyType
  >(
    path: Path,
    resolver: ResponseResolver<RestRequest<never, Params_2>, RestContext, ResponseBody_2>
  ) => RestHandler<MockedRequest<DefaultBodyType>>;
  post: <
    RequestBodyType_3 extends DefaultBodyType = DefaultBodyType,
    Params_3 extends PathParams<keyof Params_3> = PathParams<string>,
    ResponseBody_3 extends DefaultBodyType = DefaultBodyType
  >(
    path: Path,
    resolver: ResponseResolver<RestRequest<RequestBodyType_3, Params_3>, RestContext, ResponseBody_3>
  ) => RestHandler<MockedRequest<DefaultBodyType>>;
  put: <
    RequestBodyType_4 extends DefaultBodyType = DefaultBodyType,
    Params_4 extends PathParams<keyof Params_4> = PathParams<string>,
    ResponseBody_4 extends DefaultBodyType = DefaultBodyType
  >(
    path: Path,
    resolver: ResponseResolver<RestRequest<RequestBodyType_4, Params_4>, RestContext, ResponseBody_4>
  ) => RestHandler<MockedRequest<DefaultBodyType>>;
  delete: <
    RequestBodyType_5 extends DefaultBodyType = DefaultBodyType,
    Params_5 extends PathParams<keyof Params_5> = PathParams<string>,
    ResponseBody_5 extends DefaultBodyType = DefaultBodyType
  >(
    path: Path,
    resolver: ResponseResolver<RestRequest<RequestBodyType_5, Params_5>, RestContext, ResponseBody_5>
  ) => RestHandler<MockedRequest<DefaultBodyType>>;
  patch: <
    RequestBodyType_6 extends DefaultBodyType = DefaultBodyType,
    Params_6 extends PathParams<keyof Params_6> = PathParams<string>,
    ResponseBody_6 extends DefaultBodyType = DefaultBodyType
  >(
    path: Path,
    resolver: ResponseResolver<RestRequest<RequestBodyType_6, Params_6>, RestContext, ResponseBody_6>
  ) => RestHandler<MockedRequest<DefaultBodyType>>;
  options: <
    RequestBodyType_7 extends DefaultBodyType = DefaultBodyType,
    Params_7 extends PathParams<keyof Params_7> = PathParams<string>,
    ResponseBody_7 extends DefaultBodyType = DefaultBodyType
  >(
    path: Path,
    resolver: ResponseResolver<RestRequest<RequestBodyType_7, Params_7>, RestContext, ResponseBody_7>
  ) => RestHandler<MockedRequest<DefaultBodyType>>;
};

export const createMockApi = ({ baseURL = '' }: { baseURL?: string } = {}) => {
  const mockCoreApi: mockCoreApi = {
    all(path, resolver) {
      return rest.all(`${baseURL}${path}`, resolver);
    },
    head(path, resolver) {
      return rest.head(`${baseURL}${path}`, resolver);
    },
    get(path, resolver) {
      return rest.get(`${baseURL}${path}`, resolver);
    },
    post(path, resolver) {
      return rest.post(`${baseURL}${path}`, resolver);
    },
    put(path, resolver) {
      return rest.put(`${baseURL}${path}`, resolver);
    },
    delete(path, resolver) {
      return rest.delete(`${baseURL}${path}`, resolver);
    },
    patch(path, resolver) {
      return rest.patch(`${baseURL}${path}`, resolver);
    },
    options(path, resolver) {
      return rest.options(`${baseURL}${path}`, resolver);
    },
  };
  return mockCoreApi;
};
