export const validateDataFromStorage = (userData: any) => {
	if (!userData) return null;

	const { token, userId, expirationDate, refreshToken } = JSON.parse(userData);

	return new Date(expirationDate) <= new Date() || !token || !userId
		? null
		: {
				token,
				userId,
				refreshToken,
		  };
};
