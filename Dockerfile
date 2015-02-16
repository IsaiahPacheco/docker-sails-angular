FROM node:0.10-onbuild

RUN npm -g install bower sails && npm install && bower install --allow-root

# [Production Settings]
EXPOSE 80
CMD sails lift --prod

# [Development Settings]
# EXPOSE 1337
# CMD node_modules/.bin/sails lift