export type UserRequestDto = {
    authProvider: string[];
    email: string;
    username: string;
    profilePicture: string;
    firstName: string;
    lastName: string;
    bio: string;
};

export type UpdateUserDto = {
};

export type AuthRequestDto = UserRequestDto & {
};

export type CategoryRequestDto = {
    name: string;
    description: string;
    slug: string;
};

export type UpdateProductCategoryDto = CategoryRequestDto & {

};

export type ExternalLinkDto = {
    platform: string;
    link: string;
};

export type ProductRequestDto = {
    title: string;
    description: string;
    slug: string;
    categories: string[];
    technologies: string[];
    createdBy: string;
    status: string;
    isPublished: boolean;
    externalLinks: ExternalLinkDto[];
};

export type ProductResponseDto = ProductRequestDto & {
    id: string;
};

export type UpdateProductRequestDto = ProductRequestDto & {
    id: string;
};

export type ProductUpvoteRequestDto = {
    status: string;
    userId: string;
    productId: string;
};

export type CreateProductRatingRequestDto = {
    userId: string;
    productId: string;
    rating: number;
};

export type UpdateProductRatingRequestDto = {
};

export type CreateProductDiscussionDto = {
    userId: string;
    productId: string;
    content: string;
    replyTo: string;
};

export type UpdateProductDiscussionDto = {
};
