export const ROUTES = {
    HEALTH_CHECK: '/health',
    CREATE_USER: '/users',
    GET_ALL_USERS: '/users',
    GET_USER_BY_ID: '/users/:id',
    UPDATE_USER: '/users/:id',
    DELETE_USER: '/users/:id',
    OPEN_ID_AUTH: '/users/open-id-auth',
    CREATE_CATEGORY: '/product-categories',
    GET_ALL_CATEGORIES: '/product-categories',
    GET_CATEGORY_BY_ID: '/product-categories/:id',
    UPDATE_CATEGORY: '/product-categories/:id',
    DELETE_CATEGORY: '/product-categories/:id',
    CREATE_PRODUCT: '/products',
    GET_ALL_PRODUCTS: '/products',
    GET_PRODUCT_BY_ID: '/products/:id',
    UPDATE_PRODUCT: '/products/:id',
    DELETE_PRODUCT: '/products/:id',
    CREATE_PRODUCT_UPVOTE: '/products/:id/product-upvotes',
    GET_ALL_UPVOTES_FOR_PRODUCT: '/products/:productId/product-upvotes',
    REMOVE_PRODUCT_UPVOTE: '/products/:productId/product-upvotes/:id',
    CREATE_PRODUCT_RATING: '/products/:productId/product-ratings',
    GET_ALL_RATINGS_FOR_PRODUCT: '/products/:productId/product-ratings',
    GET_RATING_BY_ID_FOR_PRODUCT: '/products/:productId/product-ratings/:id',
    UPDATE_PRODUCT_RATING: '/products/:productId/product-ratings/:id',
    DELETE_PRODUCT_RATING: '/products/:productId/product-ratings/:id',
    CREATE_PRODUCT_DISCUSSION: '/products/:productId/product-discussions',
    GET_ALL_DISCUSSIONS_FOR_PRODUCT: '/products/:productId/product-discussions',
    GET_DISCUSSION_BY_ID_FOR_PRODUCT: '/products/:productId/product-discussions/:id',
    UPDATE_PRODUCT_DISCUSSION: '/products/:productId/product-discussions/:id',
    DELETE_PRODUCT_DISCUSSION: '/products/:productId/product-discussions/:id',

    /**
     * Integration APIs
     */
    GET_SERVICE_REPOSITORIES: '/users/:userId/services/:service/repos',
}


